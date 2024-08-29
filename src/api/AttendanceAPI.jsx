import axios from "axios";
const BASE_URL = import.meta.env.VITE_BACK_URL;
//출석하기
export const PostAttendance = async (navigate, LibraryData) => {
  try {
    const json = JSON.stringify(LibraryData);
    console.log(json);
    const response = await axios.post(`${BASE_URL}/attendance_info`, json, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    if (response.status === 200) {
      if (response.data.success === true) {
        alert("출석하기를 완료했습니다."); // 출석 성공 시 알림
        navigate("/Home");
        console.log(response);
      } else {
        console.log(response);
        alert("하루에 한번만 출석할 수 있습니다."); // 이미 출석했을 때 알림
        navigate(-1);
      }
    }
    if (response.status === 400) {
      console.log("출석하기 실패");
    }
  } catch (error) {
    console.log("Faild to post userdata", error);
    throw error;
  }
};
