import axios from "axios";
const BASE_URL =
  "http://data4library.kr/api/loanItemSrch?authKey=08777d5a7c571952f5b7149a562aef34bdcc936ef17dd630a7d8cbf4e1f14bc1&startDt=2024-01-01&endDt=2024-08-19&format=json";

export const fetchPopularBooksAPI = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    console.log("인기도서대출 데이터:", response.data);
    return response.data;
  } catch (error) {
    console.log("Failed to fetch Books:", error);
  }
};
