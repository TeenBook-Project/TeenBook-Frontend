import React from "react";
import Maps from "../components/Maps";
import styled from "styled-components";
const LibraryMap = () => {
  return (
    <Container>
      <Maps />
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
export default LibraryMap;
