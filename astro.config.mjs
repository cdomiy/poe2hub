// astro.config.mjs
// 说明：这个文件是给合并进你实际项目时参考/合并用的最小示例，
// 如果你已有 astro.config.mjs，把 sitemap 集成和 site 字段合并进去即可，不要整个覆盖。
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // ⚠️ 换成真实域名，sitemap和OG的canonical链接都依赖这个字段
  site: "https://poe2hub.net",
  integrations: [
    sitemap({
      // Tier List这类高频更新页面sitemap优先级可以单独调高，帮助搜索引擎更快重新抓取
      customPages: [],
    }),
  ],
});
