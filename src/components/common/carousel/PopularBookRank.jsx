import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../Loading";
import Carousel from "./Carousel";
import BookCard from "../card/BookCard";
const BASE_URL = import.meta.env.VITE_POPULAR_BOOK_API_URL;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const PopularBookRank = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadLibraries = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${BASE_URL}`);
        const data = await res.json();
        const filteredData = removeDuplicates(data.response.docs);
        const firstFiveItems = filteredData.slice(0, 5);
        setBooks(firstFiveItems);
        console.log("필터링 데이터:", firstFiveItems);
        setLoading(false);
      } catch (error) {
        console.error("Error loading PopularBooks:", error);
      }
    };

    loadLibraries();
  }, []);

  const removeDuplicates = (data) => {
    const seenTitles = new Set();
    return data.filter((item) => {
      const isDuplicate = seenTitles.has(item.doc.bookname.trim());
      seenTitles.add(item.doc.bookname.trim());
      return !isDuplicate;
    });
  };

  return (
    <Container>
      {loading ? <Loading /> : null}
      <Carousel
        books={books}
        key="doc.no"
        data="doc"
        CardComponent={BookCard}
      />
    </Container>
  );
};

export default PopularBookRank;
