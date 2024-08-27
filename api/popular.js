// import axios from "axios";
// const BASE_URL = import.meta.env.VITE_POPULAR_BOOK_API_URL;

export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://data4library.kr/api/loanItemSrch?authKey=08777d5a7c571952f5b7149a562aef34bdcc936ef17dd630a7d8cbf4e1f14bc1&startDt=2024-01-01&endDt=2024-08-19&format=json"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json(); // 응답을 JSON으로 변환
    res.status(200).json(data); // 데이터를 클라이언트로 반환
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching data", error: error.message });
  }
}
