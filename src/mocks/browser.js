import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";
// import { http } from "msw";
// const worker = setupWorker(
//   // 가짜 API 엔드포인트 설정
//   http.post("http://localhost:8080/auth/kakao", (req, res, ctx) => {
//     return res(
//       ctx.status(200),
//       ctx.json({
//         message: "Mock user data received successfully",
//       })
//     );
//   })
// );

// export default worker;
export const worker = setupWorker(...handlers);
