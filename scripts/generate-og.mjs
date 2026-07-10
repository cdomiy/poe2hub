// scripts/generate-og.mjs
// 用法：node scripts/generate-og.mjs
// 依赖（需要在你的项目里 npm install）：gray-matter, @resvg/resvg-js, fast-glob
//
// 逻辑：遍历 src/content/{builds,bosses,mechanics,patches} 下所有md文件，
// 按类型选模板 -> 替换占位符 -> 用resvg栅格化 -> 输出到 public/og/[collection]/[slug].png

import fs from "node:fs";
import path from "node:path";
import fg from "fast-glob";
import matter from "gray-matter";
import { Resvg } from "@resvg/resvg-js";

const ROOT = process.cwd();
const TEMPLATE_DIR = path.join(ROOT, "og-templates");
const OUT_DIR = path.join(ROOT, "public", "og");

// tier -> 色值，需与 src/styles/global.css 里的 --rarity-* 保持一致
const TIER_COLOR = {
  S: "#d66240", // accent-rust-bright
  A: "#e8d55c", // rarity-rare
  B: "#6f9fd8", // rarity-magic
  C: "#a89e88", // text-dim
};

const FONT_FILES = [
  path.join(ROOT, "og-templates", "fonts", "Cinzel-SemiBold.ttf"),
  path.join(ROOT, "og-templates", "fonts", "Inter-Medium.ttf"),
  path.join(ROOT, "og-templates", "fonts", "IBMPlexMono-Medium.ttf"),
];

// PHASE_DOTS 本身就是拼好的SVG标记（<circle .../>），不能被XML转义，否则会被当成文本渲染出来
const RAW_FIELDS = new Set(["PHASE_DOTS"]);

// 统一的slug计算：保留嵌套目录结构（如 builds/warrior/titan.md），把路径分隔符换成短横线，
// 避免不同目录下出现同名文件时互相覆盖PNG（比如未来某个新职业升华恰好同名）。
// 同时这个函数算出来的文件名必须和 .astro 页面里拼 ogImage 路径的逻辑保持一致。
function slugFromFile(file, baseDir) {
  return path
    .relative(baseDir, file)
    .replace(/\.md$/, "")
    .split(path.sep)
    .join("-");
}

function fillTemplate(tpl, fields) {
  let out = tpl;
  for (const [key, val] of Object.entries(fields)) {
    const replacement = RAW_FIELDS.has(key) ? String(val ?? "") : escapeXml(String(val ?? ""));
    out = out.replaceAll(`{{${key}}}`, replacement);
  }
  return out;
}

function escapeXml(s) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderPng(svgString, outPath) {
  const resvg = new Resvg(svgString, {
    fitTo: { mode: "width", value: 1200 },
    font: {
      fontFiles: FONT_FILES,
      loadSystemFonts: false,
      defaultFontFamily: "Inter",
    },
  });
  const png = resvg.render().asPng();
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, png);
}

async function run() {
  const buildTpl = fs.readFileSync(path.join(TEMPLATE_DIR, "build.svg"), "utf-8");
  const bossTpl = fs.readFileSync(path.join(TEMPLATE_DIR, "boss.svg"), "utf-8");
  const mechTpl = fs.readFileSync(path.join(TEMPLATE_DIR, "mechanics.svg"), "utf-8");
  const patchTpl = fs.readFileSync(path.join(TEMPLATE_DIR, "patch.svg"), "utf-8");
  const defaultTpl = fs.readFileSync(path.join(TEMPLATE_DIR, "default.svg"), "utf-8");

  // ---- Default (fallback for pages with no dedicated template, e.g. /about/, /privacy-policy/) ----
  // 静态模板，没有 {{}} 占位符要填，直接原样渲染即可
  renderPng(defaultTpl, path.join(OUT_DIR, "default.png"));

  // ---- Builds ----
  for (const file of await fg("src/content/builds/**/*.md")) {
    const { data } = matter(fs.readFileSync(file, "utf-8"));
    const slug = slugFromFile(file, path.join(ROOT, "src/content/builds"));
    const svg = fillTemplate(buildTpl, {
      TITLE: data.title,
      CLASS: data.class,
      ASCENDANCY: data.ascendancy,
      TIER: data.tier,
      TIER_COLOR: TIER_COLOR[data.tier] ?? TIER_COLOR.C,
      PATCH: data.patchVersion,
    });
    renderPng(svg, path.join(OUT_DIR, "builds", `${slug}.png`));
  }

  // ---- Bosses ----
  for (const file of await fg("src/content/bosses/*.md")) {
    const { data } = matter(fs.readFileSync(file, "utf-8"));
    const slug = slugFromFile(file, path.join(ROOT, "src/content/bosses"));
    const phaseCount = data.phases?.length ?? 0;

    // 阶段数≥2才画圆点；否则降级显示推荐等级，避免视觉单薄（见OG_SPEC.md兜底说明）
    // 全站是纯英文站点，这里的label必须是英文，不能出现中文
    let phaseLabel = "Phase Breakdown";
    let phaseDots = "";
    if (phaseCount >= 2) {
      phaseDots = Array.from({ length: phaseCount })
        .map((_, i) => `<circle cx="${150 + i * 30}" cy="0" r="7" fill="#d66240"/>`)
        .join("");
    } else {
      phaseLabel = `Recommended Level ${data.recommendedLevel ?? "-"}`;
    }

    const svg = fillTemplate(bossTpl, {
      TITLE: data.title,
      CATEGORY_LABEL: data.category === "pinnacle" ? "PINNACLE BOSS" : "STORY BOSS",
      PHASE_LABEL: phaseLabel,
      PHASE_DOTS: phaseDots,
      PATCH: data.patchVersion,
    });
    renderPng(svg, path.join(OUT_DIR, "bosses", `${slug}.png`));
  }

  // ---- Mechanics ----
  for (const file of await fg("src/content/mechanics/*.md")) {
    const { data } = matter(fs.readFileSync(file, "utf-8"));
    const slug = slugFromFile(file, path.join(ROOT, "src/content/mechanics"));
    const svg = fillTemplate(mechTpl, {
      TITLE: data.title,
      SYSTEM: data.system,
      PATCH: data.currentPatch,
    });
    renderPng(svg, path.join(OUT_DIR, "mechanics", `${slug}.png`));
  }

  // ---- Patches ----
  for (const file of await fg("src/content/patches/*.md")) {
    const { data } = matter(fs.readFileSync(file, "utf-8"));
    const slug = slugFromFile(file, path.join(ROOT, "src/content/patches"));
    const svg = fillTemplate(patchTpl, {
      TITLE: data.title,
      VERSION: data.version,
      RELEASE_DATE: new Date(data.releaseDate).toISOString().slice(0, 10),
    });
    renderPng(svg, path.join(OUT_DIR, "patches", `${slug}.png`));
  }

  console.log("OG images generated into public/og/");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
