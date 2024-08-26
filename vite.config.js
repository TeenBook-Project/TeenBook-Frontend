import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // VitePWA({
    //   manifest: {
    //     name: "library-app",
    //     short_name: "library",
    //     description: "My app increases the use of youth library",
    //     theme_color: "#ffffff",
    //     display: "standalone",
    //     icons: [
    //       {
    //         src: "/logo192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/logo512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //     ],
    //   },
    //   registerType: "autoUpdate", // 서비스 워커 자동 업데이트
    //   workbox: {
    //     // 캐싱 전략을 설정할 수 있습니다.
    //     runtimeCaching: [
    //       {
    //         urlPattern: /^https:\/\/example.com\/.*\/*.json$/,
    //         handler: "NetworkFirst",
    //         options: {
    //           cacheName: "api-cache",
    //           expiration: {
    //             maxEntries: 10,
    //             maxAgeSeconds: 60 * 60 * 24 * 30, // 30일
    //           },
    //         },
    //       },
    //     ],
    //   },
    //   devOptions: {
    //     enabled: true, // 개발 모드에서 PWA를 활성화
    //     type: "module", // 서비스 워커가 최신 모듈 시스템을 사용
    //   },
    // }),
  ],
  server: {
    hmr: true,
    proxy: {
      // "/api/library": {
      //   target: "http://openapi.seoul.go.kr:8088",
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api\/library/, ""),
      // },
      // "/api/popular": {
      //   target: "http://data4library.kr",
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api\/popular/, "/api/loanItemSrch"),
      // },
    },
  },
});
