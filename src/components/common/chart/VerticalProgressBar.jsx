import React from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  margin: 0 10px;
`;

const ProgressBarLabel = styled.div`
  margin-top: 15px;
  text-align: center;
  font-size: 0.7rem;
  line-height: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProgressBarWrapper = styled.div`
  width: 40px;
  height: 100px;
  position: relative;
  display: flex;
  align-items: flex-end;
`;

const ProgressBarFill = styled.div`
  width: 100%;
  background-color: ${(props) => props.fillColor};
  height: ${(props) => props.height}%;
  transition: height 0.5s ease-in-out;
`;

const ProgressBarValue = styled.div`
  position: absolute;
  bottom: ${(props) => props.height / 2}%;
  left: 25%;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
`;

const VerticalProgressBar = ({ label, value, max }) => {
  const percentage = (value / max) * 100;
  const fillColor = label === "청소년 평균 대출 수" ? "#d6d6d6" : "#8367E1"; // 조건에 따른 색상 변경

  return (
    <div>
      <ProgressBarContainer>
        <ProgressBarWrapper>
          <ProgressBarFill
            height={percentage > 100 ? 100 : percentage} // 최대 100%로 제한
            fillColor={fillColor}
          />
          <ProgressBarValue height={percentage > 100 ? 100 : percentage}>
            {value}권
          </ProgressBarValue>
        </ProgressBarWrapper>
      </ProgressBarContainer>

      <ProgressBarLabel>{label}</ProgressBarLabel>
    </div>
  );
};

export default VerticalProgressBar;
