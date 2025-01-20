// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://ins20.github.io",
  base: "build",
  experimental: {
    svg: true,
  },
});
