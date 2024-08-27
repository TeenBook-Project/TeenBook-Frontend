import React, { useEffect, useState } from "react";
import { fetchTrendBooks } from "../../../api/TrendAPI";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"; // Pagination 스타일을 import
import TrendCard from "../card/TrendCard";
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
const TrendingBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await fetchTrendBooks();
        console.log("급상승", data);
        setBooks(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    loadBooks();
  }, []);
  return (
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
        <SwiperContainer key={e.hb_num}>
          <TrendCard data={e} ranking={index + 1} />
        </SwiperContainer>
      ))}
    </MySwipter>
  );
};

export default TrendingBooks;
