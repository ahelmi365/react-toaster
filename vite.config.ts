import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
const serverDomain = "http://localhost:5005";
// https://vite.dev/config/
export default defineConfig({
  server: {

    proxy: {
      "/xcategories": {
        target: `${serverDomain}`,
        changeOrigin: true,
      },
      "/products": {
        target: `${serverDomain}`,
        changeOrigin: true,
      },
    },
  },
  plugins: [react(), tsconfigPaths()],
});
