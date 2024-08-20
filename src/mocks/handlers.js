import { http } from "msw";

export const handlers = [
  http.post("/auth", (req, res, ctx) => {
    // 요청 본문 데이터 접근 (필요한 경우)
    const { id, nickname, profile_image } = req.body;

    // 여기서 서버가 반환할 응답 데이터를 설정
    return res(
      ctx.status(200),
      ctx.json({
        message: "User successfully logged in",
        user: {
          id,
          nickname,
          profile_image,
        },
      })
    );
  }),
];
