import React from "react";
import Spinner from "../../assets/Spinner.gif";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  img {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Loading = () => {
  return (
    <SpinnerContainer>
      <img src={Spinner} alt="로딩중" width="10%" />
    </SpinnerContainer>
  );
};

export default Loading;
