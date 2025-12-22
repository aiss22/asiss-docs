import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Aiss 笔记",
  description: "后端 | 前端 | 数据库 ",

  theme

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
