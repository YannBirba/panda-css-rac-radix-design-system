import { defineConfig } from "vitest/config";
import { resolve } from "path";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      src: resolve(__dirname, "src/"),
      "@components": resolve(__dirname, "src/components/"),
      "@assets": resolve(__dirname, "src/assets/"),
      "@hooks": resolve(__dirname, "src/hooks/"),
      "@helpers": resolve(__dirname, "src/helpers"),
      "@services": resolve(__dirname, "src/services/"),
      "@styled-system": resolve(__dirname, "styled-system/"),
    },
  },
});
