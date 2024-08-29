//나의 방문수, 대출 수, 포인트, 레벨
import axios from "axios";
export const fetchStats = async () => {
  try {
    const response = await axios.get("/teenbook-api/user/count");
    if (response.status === 200) {
      console.log("나의 통계 데이터", response.data);
      return response.data;
    }
  } catch (error) {
    console.error("Failed to fetch Stats:", error);
    throw error;
  }
};
