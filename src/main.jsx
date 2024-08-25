import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/Reset.css";
import { RecoilRoot } from "recoil";
import { worker } from "./mocks/browser.js";
// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     // 서비스 워커의 경로 설정
//     // const swUrl = `${process.env.BASE_URL}service-worker.js`;
//     navigator.serviceWorker
//       .register("/service-worker.js")
//       .then((registration) => {
//         console.log(
//           "Service Worker registered with scope:",
//           registration.scope
//         );
//       })
//       .catch((error) => {
//         console.error("Service Worker registration failed:", error);
//       });
//   });
// }
if (import.meta.env.MODE === "development") {
  worker.start();
}
createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </RecoilRoot>
);
