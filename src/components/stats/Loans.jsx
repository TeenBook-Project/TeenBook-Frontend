import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import styled from "styled-components";
import VerticalProgressBar from "../common/chart/VerticalProgressBar";
const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px 17px 30px;
  /* margin: 25px 0; */
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .title {
    font-size: 0.75rem;
    font-weight: 900;
    margin-bottom: 25px;
  }

  .content {
    display: flex;
    align-items: center;

    .text {
      width: 100%;
      /* margin-left: 20px; */
      text-align: center;
      /* flex: 1; */

      p {
        font-size: 2.1rem;
        margin-bottom: 15px;
        font-weight: 900;
      }
      .coment {
        font-size: 0.65rem;
        line-height: 16px;
        color: #b1b1b1;
      }

      span:nth-child(2) {
        color: #ed8728;
      }
    }
  }
`;

const ProgressBarGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const adolescentAvg = 5; // 청소년 평균 대출 수
const myAvg = 7; // 나의 대출 수
// max 값을 청소년 평균과 나의 대출 수 중 큰 값으로 설정
const maxValue = Math.max(adolescentAvg, myAvg);
const Loans = () => {
  return (
    <Container>
      <div className="title">이번 달 대출 수</div>
      <div className="content">
        <ProgressBarGroup>
          <VerticalProgressBar
            label="청소년 평균 대출 수"
            value={adolescentAvg}
            max={maxValue}
          />
          <VerticalProgressBar
            label="나의 평균 대출 수"
            value={myAvg}
            max={maxValue} // 동일한 max 값을 사용
          />
        </ProgressBarGroup>
        <div className="text">
          <p>2번 대출</p>
          <div className="coment">
            <span>청소년 편균보다 </span>
            <span>3권</span>
            <span> 덜 대출했어요</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Loans;
