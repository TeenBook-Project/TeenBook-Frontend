import axios from "axios";
const BASE_URL =
  "http://openapi.seoul.go.kr:8088/5345774a62613033383047496e7270/json/SeoulPublicLibraryInfo/1/1000/";
export const fetchLibraries = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    console.log(response.data);
    return response.data; // 응답 데이터 반환
  } catch (error) {
    console.error("Failed to fetch libraries:", error);
    throw error; // 에러를 호출자에게 전달
  }
};
