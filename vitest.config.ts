import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    timeout: 999999,
    setupFiles: "./vitest.setup.ts",
  },
});
