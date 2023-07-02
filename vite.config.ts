/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "UI",
      fileName: "ui",
    },
    sourcemap: true,
    minify: "terser",
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
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
      exclude: ["src/**/*.stories.{ts,tsx}"],
    },
  },
  resolve: {
    alias: {
      "@root": path.resolve(__dirname, "./src/root"),
      "@components": path.resolve(__dirname, "./src/@components"),
      "@utils": path.resolve(__dirname, "./src/@utils"),
    },
  },
  plugins: [
    react(),
    dts({
      exclude: [
        "**/*.stories.tsx",
        "**/*.(test|spec).tsx",
        "**/*.mdx",
        "**/*.md",
      ],
    }),
  ],
});
