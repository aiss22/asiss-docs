import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "后端",
      icon: "laptop-code",
      prefix: "backend/",
      link: "backend/",
      children: "structure",
    },
    {
      text: "前端",
      icon: "book",
      prefix: "frontend/",
      children: "structure",
    },
  ],
});
