# 内链与SEO技术建议

## 一、内链策略

对AdSense站尤其重要，直接影响停留时长和PV/UV：

- **补丁页 → 机制常青页 → 具体build页**：形成"热点引流→留存"闭环
- **Boss页 ↔ Build页互链**（"这个build怎么打这个Boss" / "这个Boss掉落适合哪些build"）
- **Tier List页作为全站流量枢纽**，每个build条目直接链到详情页
- 每篇内容底部放"相关攻略"模块（3-4条，同职业/同机制优先）

对应实现：`RelatedGrid` 组件，以及各内容集合schema里的 `relatedBosses` /
`relatedMechanics` / `relatedBuilds` 强类型引用字段——引用一个不存在的slug会在
构建时直接报错，不会出现死链。

## 二、结构化数据

- **Build/Boss页**：用 `Article` schema
- **FAQ部分**：用 `FAQPage` schema，承接长尾搜索词，有机会拿到FAQ富文本展示
  （对应 `FaqAccordion` 组件，自动生成对应JSON-LD）

## 三、OG图

- 按页面模板类型区分设计风格，提高社交分享识别度（详见 `06-OG图规格.md`）
- 构建时预渲染，不要用运行时截图方案

## 四、常青页的时效性信号

- 常青页的"最后更新"要显式展示（搜索引擎会参考这个信号判断内容时效性）
- 不要为了刷新而频繁改动版本号——只在真实更新时标注，否则会失去可信度

## 五、Astro + Cloudflare Pages 技术要点

- **静态生成优先**：Astro的SSG对内容站SEO友好
- **高频更新页面的特殊处理**：Tier List这类页面建议用"静态生成HTML + 客户端筛选"的方式
  （已在 `src/pages/builds/tier-list.astro` 中实现），避免每次改动都触发全站重新构建；
  如果未来需要更复杂的动态交互（比如生成分享链接），再考虑引入Cloudflare Pages Functions
- **Content Collections**：所有内容用Markdown+frontmatter管理，字段结构由schema校验，
  新增内容不需要写代码，字段填错会在`astro build`时直接报错

## 六、优先级判断

以上建议不是同等优先级都要马上做，建议顺序：
1. 内链体系（成本低，直接影响现有内容的SEO效果）
2. FAQ结构化数据（组件已现成，接入成本低）
3. OG图规格落地（有明确设计规格，执行成本中等）
4. Tier List等高频页面的技术优化（视实际流量和更新频率决定投入时机）
