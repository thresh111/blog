import { defineConfig } from "vitepress";
import nav from "./nav";
import sidebar from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Thresh Docs",
  description: "记录学习过程",
  srcDir: "./docs/",
  themeConfig: {
    logo: "/logo.png",
    nav,
    sidebar,
    search: {
      provider: "local",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Evan You",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/thresh111" }],
  },
});
