import axios from "axios";
//출석하기
export const PostUser = async (bookNO) => {
  try {
    const json = JSON.stringify(bookNO);
    console.log("bookNO:", json);
    const response = await axios.post("teenbook-api/attendance_info", json, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      console.log(response.data);
      console.log("출석하기 성공");
    }
    if (response.status === 400) {
      console.log("출석하기 실패");
    }
  } catch (error) {
    console.log("Faild to post userdata", error);
    throw error;
  }
};
