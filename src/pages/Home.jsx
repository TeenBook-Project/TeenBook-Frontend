import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Home = () => {
  return (
    <Container>
      <Link to="/LibraryMap">도서관 지도</Link>
      <Link to="/LibraryData">도서관 데이터</Link>
    </Container>
  );
};
const Container = styled.div`
  /* width: 500px; */
  /* height: 100vh; */
  /* margin: 0 auto; */
  /* border: 1px solid black; */
  /* color: blue; */
`;
export default Home;
