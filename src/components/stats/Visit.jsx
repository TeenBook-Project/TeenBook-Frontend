import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px 17px 40px;
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
    .graph {
      width: 50%;
      padding: 10px;
      /* 원형 막대기 색상 */
      .CircularProgressbar-path {
        stroke: #8367e1;
      }

      .CircularProgressbar-text {
        fill: #8367e1;
      }
    }
    .text {
      width: 100%;
      margin-left: 23px;
      text-align: center;
      p {
        font-size: 2.1rem;
        margin-bottom: 15px;
        font-weight: 900;
      }

      span {
        font-size: 0.7rem;
        color: #b1b1b1;
      }
      span:nth-child(2) {
        color: #ed8728;
      }
    }
  }
`;
const Visit = ({ stats }) => {
  return (
    <Container>
      <div className="title">이번 달 도서관 방문 수</div>
      <div className="content">
        <CircularProgressbar
          value={stats.thisMounth_Ai_p}
          className="graph"
          strokeWidth={25}
        />
        <div className="text">
          <p>{stats.thisMounth_Ai}번 방문</p>
          <div>
            <span>이번 달 </span>
            <span>{stats.thisMounth_Ai_p}%</span>
            <span> 도서관에 방문했어요</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Visit;
