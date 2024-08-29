// export default async function handler(req, res) {
//   try {
//     const response = await fetch("https://www.teenbook.click/user/login/");

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const data = await response.json(); // 응답을 JSON으로 변환
//     res.status(200).json(data); // 데이터를 클라이언트로 반환
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error fetching data", error: error.message });
//   }
// }
// import axios from 'axios';
// import axios from "axios";
// export default async function handler(req, res) {
//   try {
//     const json = JSON.stringify(req);
//     console.log("userData:", json);
//     // `axios`를 사용하여 API 요청
//     const response = await axios.post(
//       "https://www.teenbook.click/user/login/",
//       req,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         withCredentials: true,
//       }
//     );

//     // 응답이 성공적이지 않으면 오류 처리
//     if (response.status === 200) {
//       throw new Error("Network response was not ok");
//     }

//     // 응답 데이터를 클라이언트로 반환
//     res.status(200).json(response.data);
//   } catch (error) {
//     // 오류 처리
//     res
//       .status(500)
//       .json({ message: "Error fetching data", error: error.message });
//   }
// }
