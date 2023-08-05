import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
