import axios from "axios";
const BASE_URL = import.meta.env.VITE_POPULAR_BOOK_API_URL;

export const fetchPopularBooksAPI = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    console.log("인기도서대출 데이터:", response.data);
    return response.data;
  } catch (error) {
    console.log("Failed to fetch Books:", error);
  }
};
