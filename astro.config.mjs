import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];

export default defineConfig({
  output: "static",
  integrations: [react()],
  site: process.env.GITHUB_PAGES
    ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
    : "http://localhost:4321",
  base: process.env.GITHUB_PAGES && repo ? `/${repo}/` : "/",
  vite: {
    plugins: [tailwindcss()]
  }
});
