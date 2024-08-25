import React from "react";
import { useEffect, useState } from "react";
import { fetchPopularBooksAPI } from "../api/PopularBookAPI";

const BooksData = () => {
  const [libraries, setLibraries] = useState([]);

  useEffect(() => {
    const loadLibraries = async () => {
      try {
        const data = await fetchPopularBooksAPI();
        const filteredData = removeDuplicates(data.response.docs);
        const firstFiveItems = filteredData.slice(0, 5);
        setLibraries(firstFiveItems);
        console.log("필터링 데이터:", firstFiveItems);
        // console.log("인기 도서 대춢 데이터:", data.response.docs);
      } catch (error) {
        console.error("Error loading libraries:", error);
      }
    };

    loadLibraries();
  }, []);
  const removeDuplicates = (data) => {
    // 중복 제거 로직
    const seenTitles = new Set();
    return data.filter((item) => {
      const isDuplicate = seenTitles.has(item.doc.bookname.trim());
      seenTitles.add(item.doc.bookname.trim());
      return !isDuplicate;
    });
  };

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
