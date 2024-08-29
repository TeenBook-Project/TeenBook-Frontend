import axios from "axios";
const BASE_URL = import.meta.env.VITE_BACK_URL;
export const fetchTrendBooks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/scrape/hotBorrow`, {}, {
      withCredentials: true,
    });
    console.log("급상승도서대출 데이터", response.data);
    return response.data; // 응답 데이터 반환
  } catch (error) {
    console.error("Failed to fetch librariesAPI:", error);
    throw error; // 에러를 호출자에게 전달
  }
};
