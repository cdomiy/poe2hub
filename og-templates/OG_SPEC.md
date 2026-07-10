# OG图模板规格

## 基本规格
- 尺寸：**1200 × 630px**（Facebook/Twitter/Discord通用标准，避免部分平台裁切）
- 安全区：四周留 **60px** 内边距，标题文字不越过安全区，防止被部分客户端圆角裁切
- 输出格式：构建时预渲染为 **PNG**（不要在运行时用浏览器截图方案，Cloudflare Pages上开销太大）
- 命名规则：`/og/[collection]/[slug].png`，例如 `/og/builds/huntress-spirit-walker-bleed.png`

## 技术方案（配合Astro on Cloudflare Pages）
不建议用 `@vercel/og`（依赖Vercel Edge Runtime，Cloudflare上不通用）。推荐：

1. 用下面4个SVG模板做"字符串占位符替换"（`{{FIELD}}` → 实际值），在Astro的构建脚本里（`scripts/generate-og.mjs`，随包附上）读取 content collections 的frontmatter，替换生成完整SVG
2. 用 `@resvg/resvg-js`（纯Rust绑定，构建时在Node环境跑，不依赖浏览器）把SVG栅格化成PNG
3. 作为 `astro build` 前置的 `prebuild` 脚本跑一次，产出的PNG直接放进 `public/og/`，走静态资源分发，不占用Cloudflare Pages Functions的运行时开销

## 四类页面的差异化设计逻辑

设计语言复用主站token（暗铁背景+氧化铜绿+血锈色），但每类靠**一个视觉锚点**做区分，而不是简单换个色：

| 页面类型 | 视觉锚点 | 强调色 |
|---|---|---|
| Build攻略 | 右上角"稀有度宝石"式 Tier 徽章（仿装备镶嵌宝石造型） | 氧化铜绿 |
| BOSS攻略 | 底部一排阶段圆点（几阶段就几个点，直观传达"这篇讲了几个阶段"） | 血锈色 |
| 机制百科 | 左上角"常青更新"标签+当前版本号，强调这是持续维护的活文档 | 金色 |
| 补丁速报 | 版本号本身作为超大数字视觉主体 | 血锈色（更饱和，制造"资讯感"的紧迫色） |

## 字段映射（每类模板需要的占位符）

- Build: `{{TITLE}}` `{{CLASS}}` `{{ASCENDANCY}}` `{{TIER}}` `{{PATCH}}`
- Boss: `{{TITLE}}` `{{CATEGORY_LABEL}}`（剧情/终局）`{{PHASE_COUNT}}` `{{PATCH}}`
- Mechanics: `{{TITLE}}` `{{SYSTEM}}` `{{PATCH}}`
- Patch: `{{VERSION}}` `{{TITLE}}` `{{RELEASE_DATE}}`

## 字体处理
SVG里的 `font-family` 需要在resvg渲染时显式加载字体文件（`.ttf`/`.otf`），否则会回退系统字体导致排版跑位。需要准备：
- `Cinzel-SemiBold.ttf`（标题）
- `Inter-Regular.ttf` / `Inter-Medium.ttf`（正文/元信息）
- `IBMPlexMono-Medium.ttf`（数字/版本号）

在 `generate-og.mjs` 里通过 `resvg`的 `font.fontFiles` 配置传入这三个文件路径。

## 关于Boss阶段圆点数量的兜底
如果某个Boss只有1个阶段，圆点视觉会显得单薄——这种情况下模板自动退化为不显示圆点，改为显示"推荐等级"数字，避免空荡的设计。这个逻辑写在生成脚本里，不需要手动处理。
