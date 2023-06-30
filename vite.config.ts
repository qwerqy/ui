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
    css: true,
    coverage: {
      provider: "istanbul",
      reportsDirectory: ".coverage",
      reporter: [["json", { file: "coverage.json" }]],
      all: true,
      include: ["src/**/*.{ts,tsx}"],
    },
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
