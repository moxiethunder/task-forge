import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  root: "./src",
  publicDir: "../public",
  base: "./",

  server: {
    host: true,
    open: !("SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env),
  },

  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: true,
  },

  resolve: {
    alias: {
      "~": resolve(__dirname, "./"),
      "@": resolve(__dirname, "src"),
      "@styles": resolve(__dirname, "src/styles"),
      "@scripts": resolve(__dirname, "src/scripts"),
      "@app": resolve(__dirname, "src/app"),
    },
  },
});