import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const customDomain = process.env.PAGES_CUSTOM_DOMAIN;
const siteUrl = customDomain
  ? `https://${customDomain}`
  : process.env.GITHUB_PAGES
    ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
    : "https://docs.thagore.io.vn";
const basePath = customDomain
  ? "/"
  : process.env.GITHUB_PAGES && repo
    ? `/${repo}/`
    : "/";

export default defineConfig({
  output: "static",
  integrations: [react()],
  site: siteUrl,
  base: basePath,
  vite: {
    plugins: [tailwindcss()]
  }
});
