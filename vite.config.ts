/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "test.setup.ts",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
  resolve: {
    alias: {
      "@root": path.resolve(__dirname, "./src/root"),
      "@components": path.resolve(__dirname, "./src/@components"),
      "@utils": path.resolve(__dirname, "./src/@utils"),
    },
  },
  plugins: [react()],
});
