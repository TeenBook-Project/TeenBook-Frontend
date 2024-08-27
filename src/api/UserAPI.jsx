import axios from "axios";
const BASE_URL = import.meta.env.VITE_BACK_URL;
//user 정보 post api
// export const fetchUser = async () => {
//   try {
//     const response = await axios.post(`${BASE_URL}/user/login`);
//     return response.data;
//   } catch (error) {
//     console.log("Faild to fetch userdata", error);
//     throw error;
//   }
// };
//user 정보 가져오는 api
export const fetchUser = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user/`);
    return response.data;
  } catch (error) {
    console.log("Faild to fetch userdata", error);
    throw error;
  }
};
