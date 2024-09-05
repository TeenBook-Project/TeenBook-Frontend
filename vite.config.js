import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true,
    proxy: {
      "/api": {
        target: "http://openapi.seoul.go.kr:8088",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/teenbook-api": {
        target: "https://api.teenbook.click",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/teenbook-api/, ""),
      },
    },
  },
});
