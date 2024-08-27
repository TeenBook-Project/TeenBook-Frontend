export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.teenbook.click/user/login");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json(); // 응답을 JSON으로 변환
    res.status(200).json(data); // 데이터를 클라이언트로 반환
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching data", error: error.message });
  }
}
