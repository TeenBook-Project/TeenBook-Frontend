import React, { useEffect, useState } from "react";
import { fetchPopularBooksAPI } from "../../../api/PopularBookAPI";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import BookCard from "../card/BookCard";
import styled from "styled-components";
const MySwipter = styled(Swiper)`
  width: 100%;
  height: 100%;
`;
const SwiperContainer = styled(SwiperSlide)`
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-radius: 20px;
  img {
    display: block;
    width: 100%;
    height: 85%;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;
const PopularBookRank = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadLibraries = async () => {
      try {
        const data = await fetchPopularBooksAPI();
        const filteredData = removeDuplicates(data.response.docs);
        const firstFiveItems = filteredData.slice(0, 5);
        setBooks(firstFiveItems);
        console.log("필터링 데이터:", firstFiveItems);
      } catch (error) {
        console.error("Error loading libraries:", error);
      }
    };

    loadLibraries();
  }, []);
  //도서 중복 데이터 삭제
  const removeDuplicates = (data) => {
    const seenTitles = new Set();
    return data.filter((item) => {
      const isDuplicate = seenTitles.has(item.doc.bookname.trim());
      seenTitles.add(item.doc.bookname.trim());
      return !isDuplicate;
    });
  };

  return (
    <MySwipter
      slidesPerView={1}
      spaceBetween={10}
      className="mySwiper"
      // style={{ width: "150%" }}
    >
      {books.map((e, index) => (
        <SwiperContainer key={e.doc.no}>
          <BookCard data={e.doc} ranking={index + 1} />
        </SwiperContainer>
      ))}
    </MySwipter>
  );
};

export default PopularBookRank;
