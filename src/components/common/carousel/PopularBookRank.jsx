import React, { useEffect, useState } from "react";
import { fetchPopularBooksAPI } from "../../../api/PopularBookAPI";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"; // Pagination 스타일을 import
import BookCard from "../card/BookCard";
import styled from "styled-components";
import Loading from "../Loading";
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
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
const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
const PopularBookRank = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadLibraries = async () => {
      setLoading(true);
      try {
        // const data = await fetchPopularBooksAPI();
        const res = await fetch("/api/popular");
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
      {loading ? (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      ) : null}
      <MySwipter
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {books.map((e, index) => (
          <SwiperContainer key={e.doc.no}>
            <BookCard data={e.doc} ranking={index + 1} />
          </SwiperContainer>
        ))}
      </MySwipter>
    </Container>
  );
};

export default PopularBookRank;
