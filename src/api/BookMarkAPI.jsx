import axios from "axios";
const BASE_URL = import.meta.env.VITE_BACK_URL;
//즐겨찾기 등록
export const PostBookMark = async (bookData) => {
  try {
    const json = JSON.stringify(bookData);
    console.log("bookData:", json);
    const response = await axios.post(`${BASE_URL}/bookmark`, json, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    if (response.status === 200) {
      console.log(response.data);

      console.log("즐겨찾기 등록 성공");
    }
    if (response.status === 400) {
      console.log("즐겨찾기 등록 실패");
    }
  } catch (error) {
    console.log("Faild to bookmark", error);
    throw error;
  }
};
//즐겨찾기 삭제
export const DeleteBookMark = async (LBRRY_NAME) => {
  console.log(LBRRY_NAME);
  try {
    const response = await axios.delete(`${BASE_URL}/bookmark/${LBRRY_NAME}`, {
      withCredentials: true,
    });
    if (response.status === 200) {
      console.log(response.data);

      console.log("즐겨찾기 삭제 성공");
    }
    if (response.status === 400) {
      console.log("즐겨찾기 삭제 실패");
    }
  } catch (error) {
    console.log("Faild to bookmark", error);
    throw error;
  }
};
