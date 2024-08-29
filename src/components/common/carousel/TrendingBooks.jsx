import React, { useEffect, useState } from "react";
import { fetchTrendBooks } from "../../../api/TrendAPI";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TrendCard from "../card/TrendCard";
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
const LoadingOverlay = styled.div`
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
const TrendingBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadBooks = async () => {
      setLoading(true);
      try {
        const data = await fetchTrendBooks();
        console.log("급상승", data);
        setBooks(data);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };
    loadBooks();
  }, []);
  return (
    <Container>
      {loading && (
        <LoadingOverlay>
          <Loading />
        </LoadingOverlay>
      )}
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
    </Container>
  );
};

export default TrendingBooks;
