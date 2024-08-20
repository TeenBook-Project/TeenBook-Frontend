import React from "react";
import { useEffect, useState } from "react";
import { fetchPopularBooksAPI } from "../api/PopularBookAPI";

const BooksData = () => {
  const [libraries, setLibraries] = useState([]);

  useEffect(() => {
    const loadLibraries = async () => {
      try {
        const data = await fetchPopularBooksAPI();
        setLibraries(data.response.docs);
        console.log("인기 도서 대춢 데이터:", data.response.docs);
      } catch (error) {
        console.error("Error loading libraries:", error);
      }
    };

    loadLibraries();
  }, []);

  return (
    <div>
      {libraries.map((lib) => (
        <div key={lib.doc.no}>{lib.doc.bookname}</div>
      ))}
    </div>
    // <div>
    //   {libraries.length > 0 ? (
    //     libraries.map((lib) => <div key={lib.no}>{lib.bookname}</div>)
    //   ) : (
    //     <p>Loading...</p> // 로딩 메시지 또는 데이터가 없을 때의 메시지
    //   )}
    // </div>
  );
};
export default BooksData;
