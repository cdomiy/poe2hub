# PoE2 Hub (poe2hub.net) — 项目说明

> 完整的核实记录、每一轮内容补充的详细过程，看 [`docs/07-补充资料整合与执行清单.md`](./docs/07-补充资料整合与执行清单.md)。
> 这份README只讲代码结构和当前实际状态，不重复讲过程。

技术栈：Astro + Cloudflare Pages。内容全部走 Astro Content Collections，
Markdown + frontmatter 驱动，字段结构由 `src/content/config.ts` 校验，
新增内容不用碰模板代码，字段填错会在 `astro build` 时直接报错。

## 目录说明

```
src/
├── content/
│   ├── config.ts          # 5类内容的字段schema（在这里改字段结构）
│   ├── builds/{class}/{ascendancy}.md   # 22个升华，每个一个build文件
│   ├── bosses/*.md        # 13个boss
│   ├── mechanics/*.md     # 10个机制百科，常青页靠changelog数组累积历史
│   ├── patches/*.md       # 补丁速报
│   └── classes/*.md       # 8个职业导览（Getting Started下的Class Guide用）
├── layouts/SiteLayout.astro   # 全站唯一布局，canonical/OG/GA4都在这里统一处理
├── components/
│   ├── ItemTooltipCard.astro   # 仿ARPG物品tooltip的装备优先级卡片
│   ├── FaqAccordion.astro      # 自动生成FAQPage结构化数据
│   ├── ChangelogTimeline.astro # 机制页顶部版本标注+折叠时间线
│   └── RelatedGrid.astro       # 内链模块
├── pages/
│   ├── index.astro                       # 首页
│   ├── about/index.astro                 # About页
│   ├── privacy-policy/index.astro        # Privacy Policy（AdSense合规必需）
│   ├── builds/[...slug].astro            # Build详情页
│   ├── builds/tier-list.astro            # Tier List枢纽页（客户端筛选）
│   ├── build-planner/index.astro         # Build Planner工具
│   ├── bosses/[...slug].astro            # Boss详情页
│   ├── bosses/index.astro                # Boss列表页
│   ├── mechanics/[...slug].astro         # 机制常青页
│   ├── mechanics/index.astro             # 机制列表页
│   ├── news/patch-notes/[...slug].astro  # 补丁速报页
│   ├── news/index.astro, news/roadmap/   # 新闻列表 + 版本历史/1.0前瞻
│   ├── getting-started/index.astro       # 新手指南
│   ├── getting-started/class-guide/      # 8个职业导览（列表+详情）
│   ├── unique-items/index.astro          # 装备数据库（6分类26件）
│   ├── skill-gems/index.astro            # 宝石系统解读 + 命名宝石速查
│   ├── trade-guide/index.astro           # 交易指南
│   ├── chromatic-calculator/index.astro  # 洗色计算器工具
│   ├── loot-filter-generator/index.astro # Loot Filter生成器工具
│   ├── faq/index.astro, cheats/index.astro
│   └── 404.astro
└── styles/global.css       # 设计token：暗铁+氧化铜绿+血锈色
```

## 内容覆盖情况（截至 0.5.4b）

| 分类 | 数量 | 备注 |
|---|---|---|
| Build攻略 | 22 | 8个职业全部当前已上线升华，每个升华1篇旗舰build |
| Boss攻略 | 13 | 7个pinnacle boss，6个campaign剧情/可选boss |
| 机制百科 | 10 | Breach/Delirium/Expedition/Abyss/Ritual/Temple/Atlas体系/Passive Tree/Runes of Aldur/Atlas Masters |
| 补丁速报 | 1 | 0.5.4b |
| 职业导览 | 8 | 全部8个职业 |
| 工具 | 3 | Build Planner / Chromatic Calculator / Loot Filter Generator |
| 装备数据库 | 26件，6分类 | 武器/护甲/珠宝/戒指指环项链/药剂/盾牌 |

**数据核实状态**：22个build里，19个的升华节点名称逐条核实过（对照Fextralife、
Maxroll、Game8等官方wiki或权威攻略源），frontmatter里标记`nodesVerified: true`。
剩下3个（Mercenary Tactician、Witch Blood Mage、Witch Infernalist）机制方向确认，
但没找到官方来源逐一核实的具体节点名称，标记`nodesVerified: false`，页面上会显示
一条警示条，不会把未核实的具体名称当既定事实呈现。这个状态是准确的，不是占位符，
如果之后找到新信源能补全剩下3个，直接改frontmatter里的`nodesVerified`和
`ascendancyNodes`字段即可，不用动模板代码。

## SEO / 合规相关（v4.2起）

- **Canonical URL**：`SiteLayout.astro`里用`new URL(Astro.url.pathname, Astro.site)`
  统一生成，全站所有页面自动带上正确的`https://poe2hub.net/...`，不需要逐页面配置。
  前提是`astro.config.mjs`里`site`字段必须是`https://poe2hub.net`（已配置）。
- **GA4**：已直接内嵌在`SiteLayout.astro`的`<head>`里（Measurement ID: `G-BE38KVGCF3`）。
- **Google AdSense**：还没有实际接入。`/privacy-policy/`页面已经按AdSense审核要求
  写好了条款（cookies说明、opt-out链接），但网站本身还缺两样东西：
  1. AdSense验证脚本（`<script async src="...adsbygoogle.js?client=ca-pub-8250482430797594">`）
     还没加进`SiteLayout.astro`的`<head>`
  2. `public/ads.txt`文件还没创建（内容通常是
     `google.com, pub-8250482430797594, DIRECT, f08c47fec0942fa0`）

  这两个是AdSense审核实际要检查的东西，Privacy Policy写了条款只是文字层面合规，
  不代表广告本身已经接进来了，提交AdSense审核前记得把这两样也加上。
- **About / Privacy Policy**：`/about/`和`/privacy-policy/`已创建，Footer里也加了
  对应链接。

## OG图系统

`og-templates/`目录下有5类模板（build/boss/mechanics/patch/default）+ 规格文档
`OG_SPEC.md` + 生成脚本`scripts/generate-og.mjs`。全部English-only（曾经混入过
几处中文文字，已经修掉），1200×630标准尺寸。

- 生成规则：build的文件名保留完整职业路径（如`warrior-titan.png`），避免不同
  目录下重名文件互相覆盖。
- `default.png`是没有专属模板的页面（如About/Privacy Policy）的兜底图，已生成好
  放在`public/og/default.png`。
- 四个详情页模板（builds/bosses/mechanics/patch-notes）都已经把`ogImage`接进
  `SiteLayout`的调用里，不是生成了图但没人用。
- 字体需要自己放进`og-templates/fonts/`（Cinzel-SemiBold、Inter-Medium、
  IBMPlexMono-Medium），已经放好。

改了模板源文件（.svg）之后，记得重新跑`npm run prebuild`（或`npm run build`，
会自动串联prebuild）才能让已生成的PNG更新，改SVG源文件本身不会让磁盘上已有的
PNG自动重新渲染。

## 关于内链体系

- Build页的`relatedBosses`/`relatedMechanics`字段，Boss页的`relatedBuilds`，
  机制页的`relatedBuilds`，都用Astro的`reference()`做强类型关联，链接了不存在的
  slug会在`astro build`时直接报错，不会出现死链。
- 补丁速报页的每条`changes`都可以选填`linkedMechanic`或`linkedBuild`。

## 视觉设计说明

- 配色：暗铁炭黑背景，氧化铜绿点缀（符文/交互高亮），血锈色（警示/强调）。
- 字体：标题用Cinzel，正文用Inter，数值/版本号用IBM Plex Mono。
- 签名元素：`ItemTooltipCard`装备优先级卡片，仿ARPG游戏内物品提示框视觉。

## 构建注意事项

- `npm install`建议在本地/tmp目录执行，避免远程文件系统I/O慢导致超时；
  网络受限环境可以加`--registry=https://registry.npmmirror.com`。
- `npm run build`会自动先跑`prebuild`（重新生成全部OG图）再跑`astro build`。
