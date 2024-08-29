import React from "react";
import Spinner from "../../assets/Spinner.gif";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Loading = () => {
  return (
    <SpinnerContainer>
      <img src={Spinner} alt="로딩중" width="20%" />
    </SpinnerContainer>
  );
};

export default Loading;
