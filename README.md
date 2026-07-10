# PoE2攻略站 — 页面模板包

> 📚 想先看整体规划思路（用户需求拆解、站点架构、模板规范、排期、SEO策略），
> 从 [`docs/00-总览.md`](./docs/00-总览.md) 开始看。这份README专注讲代码怎么接入。

对应此前规划的四类核心模板：Build攻略 / BOSS攻略 / 机制百科（常青页）/ 补丁速报。
每类模板都用 Astro Content Collections 驱动，内容是 Markdown + frontmatter，
不用改代码就能新增页面。

## 目录说明

```
src/
├── content/
│   ├── config.ts          # 四类内容的字段schema（在这里改字段结构）
│   ├── builds/*.md         # 每个build一个md文件
│   ├── bosses/*.md
│   ├── mechanics/*.md      # 常青页，靠changelog数组累积历史而不是开新页
│   └── patches/*.md        # 补丁速报，changes里可直接引用build/mechanic做内链
├── layouts/SiteLayout.astro
├── components/
│   ├── ItemTooltipCard.astro   # 签名组件：仿ARPG物品tooltip的装备优先级卡片
│   ├── FaqAccordion.astro      # 自动生成FAQPage结构化数据
│   ├── ChangelogTimeline.astro # 机制页顶部版本标注+折叠时间线
│   └── RelatedGrid.astro       # 内链模块
├── pages/
│   ├── builds/[...slug].astro       # Build详情页（模板A）
│   ├── builds/tier-list.astro       # Tier List枢纽页（客户端筛选）
│   ├── bosses/[...slug].astro       # Boss详情页（模板B）
│   ├── mechanics/[...slug].astro    # 机制常青页（模板C）
│   └── news/patch-notes/[...slug].astro  # 补丁速报页（模板D）
└── styles/global.css       # 设计token：暗铁+氧化铜绿+血锈色
```

## 接入你现有项目的步骤

1. 把 `src/content`、`src/layouts`、`src/components`、`src/styles`、`src/pages` 里
   对应目录合并进你现有Astro项目（注意不要覆盖你已有的choice simulator等组件，
   放在不同子目录即可共存）。
2. 确认 `astro.config.mjs` 里没有关闭 content collections（Astro 2.0+默认开启，无需额外配置）。
3. 新增内容时，只需要在对应目录下新建一个 `.md` 文件，字段结构由 `config.ts` 校验，
   字段填错会在 `astro build` 时直接报错，不会漏发布不完整的页面。
4. Tier List页(`/builds/tier-list/`)目前是"静态生成HTML + 客户端JS筛选"，不依赖后端，
   适合Cloudflare Pages的纯静态部署；如果以后想做到"选完自动生成分享链接"这类更复杂的
   交互，再考虑引入Cloudflare Pages Functions。
5. OG图：`SiteLayout.astro` 的 `ogImage` prop 默认读 `/og/default.png`，
   可以在每个build/boss页面数据里加一个 `ogImage` 字段，接入你已有的OG生成脚本。

## 关于内链体系

- Build页的 `relatedBosses` / `relatedMechanics` 字段，Boss页的 `relatedBuilds`，
  机制页的 `relatedBuilds`，都用 Astro的 `reference()` 做强类型关联——
  也就是说如果你在补丁速报里链接了一个不存在的build slug，构建时会直接报错，
  不会出现死链。
- 补丁速报页的每条`changes`都可以选填 `linkedMechanic` 或 `linkedBuild`，
  这是把"短命流量"导向"常青页权重"的关键落地点，别漏填。

## Build内容覆盖情况

`src/content/builds/` 目前有 **21篇**，覆盖0.5.4b版本所有已确认公开的职业×升华组合
（8职业：Warrior/Witch/Ranger/Sorceress/Mercenary/Monk/Huntress/Druid，共21个已上线升华）。
每个升华目前是**1篇旗舰build**，还没有做到"每个升华下再拆多个核心技能流派"的颗粒度——
如果要继续往下细化（比如给Stormweaver再拆"雷电箭矢流"和"雷电法球流"两篇），
可以直接复制现有md文件改字段，字段结构不用动。

⚠️ 内容说明：这批build文案是按各升华公开的机制方向写的定性描述（打法思路、优缺点、装备方向），
**没有**去核对某个具体数值（如精确的天赋树坐标、装备词缀数值范围），发布前建议对照官方
天赋树规划器和最新平衡补丁核实一遍，尤其是tier评级——每次平衡补丁后这个字段最容易过期。

未覆盖的部分：部分职业的第三个升华（如Witch、Ranger、Druid）截至0.5.4b官方还未公开，
后续放出后按同样的frontmatter结构新增md文件即可。

## OG图模板

`og-templates/` 目录下有4类页面的SVG模板（build/boss/mechanics/patch）+ 规格文档
`OG_SPEC.md` + 生成脚本 `scripts/generate-og.mjs`。核心设计逻辑：
1200×630标准尺寸，四类页面共用主站配色，但各自有一个视觉锚点做区分
（Build用宝石状Tier徽章、Boss用阶段圆点、Mechanics用常青更新标签、Patch用超大版本号）。
脚本用字符串占位符替换+resvg栅格化，不依赖浏览器截图或Vercel专属方案，
适合Cloudflare Pages的构建流程。字体文件需要你自己准备并放进
`og-templates/fonts/`（Cinzel-SemiBold / Inter-Medium / IBMPlexMono-Medium），
脚本里已经写好加载路径。

## 视觉设计说明

- 配色：暗铁炭黑背景 + 氧化铜绿点缀（符文/交互高亮）+ 血锈色（警示/强调），
  刻意避开"暖米色+衬线+赤陶色"和"纯黑+荧光绿"这两种常见AI生成风格。
- 字体：标题用 Cinzel（有雕刻感的衬线体），正文用 Inter，数值/版本号用 IBM Plex Mono
  强化"游戏内数据面板"的感觉。
- 签名元素：`ItemTooltipCard` 装备优先级卡片，视觉上模拟ARPG游戏内物品提示框
  （稀有度色条+等宽字体数值），让Build页的装备列表读起来像游戏内UI，而不是普通博客列表。
