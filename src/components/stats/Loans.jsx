import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import styled from "styled-components";
const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px 17px 30px;
  margin: 25px 0;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .title {
    font-size: 0.75rem;
    font-weight: 900;
    margin-bottom: 25px;
  }
  .bar {
    transform: rotate(-90deg);
    transform-origin: center;
  }
  .content {
    display: flex;
    align-items: center;
    .text {
      width: 100%;
      /* margin-left: 20px; */
      text-align: center;
      p {
        font-size: 2.1rem;
        margin-bottom: 15px;
        font-weight: 900;
      }
      .coment {
        font-size: 0.65rem;
        line-height: 16px;
      }

      span:nth-child(2) {
        color: #ed8728;
      }
    }
  }
`;
const Graph = styled.div`
  position: relative;
  .sum {
    position: absolute;
    left: 30%;
    top: 10%;
    color: white;
  }
  p {
    margin-top: 20px;
    font-size: 0.7rem;
    font-weight: bold;
    line-height: 1rem;
    text-align: center;
  }
`;
const Graph2 = styled.div`
  position: relative;
  .sum {
    position: absolute;
    left: 25%;
    top: 20%;
    color: white;
  }
  p {
    margin-top: 20px;
    font-size: 0.7rem;
    font-weight: bold;
    line-height: 1rem;
    text-align: center;
  }
`;
const Loans = () => {
  const completed = 7; // 현재 채워진 막대 수 (7/10)
  const maxCompleted = 10;
  return (
    <Container>
      <div className="title">이번 달 대출 수</div>
      <div className="content">
        <Graph>
          <ProgressBar
            completed={10}
            maxCompleted={10}
            borderRadius="0"
            baseBgColor="white"
            bgColor="#9D9D9E"
            className="bar"
            height="40px"
            isLabelVisible={false}
          />
          <div className="sum">7권</div>
          <p>청소년 평균 대출 수</p>
        </Graph>
        <Graph2>
          <ProgressBar
            completed={completed}
            maxCompleted={maxCompleted}
            borderRadius="0"
            baseBgColor="white"
            bgColor="#8367e1"
            className="bar"
            height="40px"
            isLabelVisible={false}
          />
          <div className="sum">4권</div>
          <p>나의 대출 수</p>
        </Graph2>
        {/* <div className="progress-text">{completed}권</div> */}
        <div className="text">
          <p>2번 대출</p>
          <div className="coment">
            <span>청소년 편균 보다 </span>
            <span>3권</span>
            <span> 덜 대출했어요</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Loans;
