import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TrendCard from "../card/TrendCard";
import BookCard from "../card/BookCard";

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
const Carousel = ({ books, key, data, CardComponent }) => {
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
        <SwiperContainer key={e[key]}>
          {CardComponent === BookCard ? (
            <CardComponent data={e[data]} ranking={index + 1} />
          ) : (
            <CardComponent data={e} ranking={index + 1} />
          )}
        </SwiperContainer>
      ))}
    </MySwipter>
  );
};

export default Carousel;
