import React from "react";
import { useEffect, useState } from "react";
import { fetchLibraries } from "../api/LibraryAPI";
const LibraryData = () => {
  const [libraries, setLibraries] = useState([]);

  useEffect(() => {
    const loadLibraries = async () => {
      try {
        const res = await fetch("/api/library");
        const res2 = await fetch("/api/popular");
        const data = await res.json();
        const data2 = await res2.json();
        console.log(data, "도서관 위치");
        console.log(data2, "인기있는 도서");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadLibraries();
  }, []);

  return (
    <div>
      {/* {libraries.map((lib) => (
        <div key={lib.LBRRY_SEQ_NO}>{lib.LBRRY_NAME}</div>
      ))} */}
    </div>
  );
};
export default LibraryData;
