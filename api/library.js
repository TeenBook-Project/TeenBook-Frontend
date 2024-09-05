// import axios from "axios";
// const BASE_URL = import.meta.env.VITE_LIBRARY_API_URL;
export default async function handler(req, res) {
  try {
    const response = await fetch(
      "http://openapi.seoul.go.kr:8088/5345774a62613033383047496e7270/json/SeoulPublicLibraryInfo/1/1000/"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json(); // 응답을 JSON으로 변환dd
    res.status(200).json(data); // 데이터를 클라이언트로 반환
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching data", error: error.message });
  }
}
