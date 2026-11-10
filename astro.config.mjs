import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// pstack 新手教程站：静态构建，界面全部用 xxd-ui-kit（public/xxd/ 里的一份，用 xxd-ui sync 更新）。
// 主站 https://pstack.xiaoxiaodong.ai 部署在根路径；放到子路径时用 SITE_URL / BASE_PATH 构建
// （组件里的链接走 data/nav.js 的 link()，正文里手写的 /xxx 链接由 scripts/base-links.mjs 在构建后补前缀）。
const site = process.env.SITE_URL || "https://pstack.xiaoxiaodong.ai";
const base = process.env.BASE_PATH || "/";
export default defineConfig({
  site,
  base,
  trailingSlash: "always",
  integrations: [mdx()],
  build: { format: "directory" },
});
