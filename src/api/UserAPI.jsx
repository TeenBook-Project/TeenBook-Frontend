import axios from "axios";
const BASE_URL = import.meta.env.VITE_BACK_URL;
//user 정보 post api
// export const PostUser = async (userData, navigate, setSignIn) => {
//   try {
//     const json = JSON.stringify(userData);
//     console.log("userData:", json);
//     const response = await axios.post("teenbook-api/user/login", json, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       withCredentials: true,
//     });
//     if (response.status === 200) {
//       navigate("/Home");
//       setSignIn(true);

//       console.log("로그인 성공 결과값", response.data);
//       // sessionStorage.setItem("loginUser", JSON.stringify(response.data.userId));
//       console.log("로그인성공");
//     }
//     if (response.status === 400) {
//       console.log("로그인 실패");
//     }
//   } catch (error) {
//     console.log("Faild to post userdata", error);
//     throw error;
//   }
// };
export const PostUser = async (userData, navigate, setSignIn) => {
  try {
    const json = JSON.stringify(userData);
    console.log("userData:", json);
    const response = await axios.post(`${BASE_URL}/user/login`, json, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    if (response.status === 200) {
      navigate("/Home");
      setSignIn(true);

      console.log("로그인 성공 결과값", response.data);
      // sessionStorage.setItem("loginUser", JSON.stringify(response.data.userId));
      console.log("로그인성공");
    }
    if (response.status === 400) {
      console.log("로그인 실패");
    }
  } catch (error) {
    console.log("Faild to post userdata", error);
    throw error;
  }
};
//로그아웃
export const Logout = async (navigate, setSignIn) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/logout`, {
      withCredentials: true,
    });
    if (response.status === 200) {
      console.log("로그아웃 성공");
      navigate("/");
      setSignIn(false);
    }
  } catch (error) {
    console.log("error logout", error);
  }
};
//user 정보 가져오는 api
export const FetchUser = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user/count`, {
      withCredentials: true,
    });
    console.log("유저데이터", response.data);
    return response.data;
  } catch (error) {
    console.log("Faild to fetch userdata", error);
    throw error;
  }
};
