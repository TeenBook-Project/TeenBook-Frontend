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
  justify-content: center; /* 수평 중앙 정렬 */
`;

const ProgressBarFill = styled.div`
  width: 100%;
  background-color: ${(props) => props.fillColor};
  height: ${(props) => props.height}%;
  transition: height 0.5s ease-in-out;
  position: absolute; /* Fill은 Absolute로 설정 */
  bottom: 0; /* Fill을 아래로 맞춤 */
`;

const ProgressBarValue = styled.div`
  position: absolute;
  bottom: ${(props) => props.height / 2}%;
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center; /* 가로 중앙 정렬 */
  width: 100%; /* Flexbox가 중앙 정렬을 돕도록 전체 너비 설정 */
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
