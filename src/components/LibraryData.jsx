import React from "react";
import { useEffect, useState } from "react";
import { fetchLibraries } from "../api/LibraryAPI";
const LibraryData = () => {
  const [libraries, setLibraries] = useState([]);

  useEffect(() => {
    const loadLibraries = async () => {
      try {
        const data = await fetchLibraries();
        setLibraries(data.SeoulPublicLibraryInfo.row);
        console.log("도서관 데이터:", data.SeoulPublicLibraryInfo.row);
      } catch (error) {
        console.error("Error loading libraries:", error);
      }
    };

    loadLibraries();
  }, []);

  return (
    <div>
      {libraries.map((lib) => (
        <div key={lib.LBRRY_SEQ_NO}>{lib.LBRRY_NAME}</div>
      ))}
    </div>
  );
};
export default LibraryData;
