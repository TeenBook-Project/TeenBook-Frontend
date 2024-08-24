import React from "react";
import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";
const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 12px 17px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .point {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    font-weight: 900;
    p:first-child {
      font-size: 0.75rem;
    }
  }

  .level {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    p:first-child {
      color: #b0b0b0;
    }
    .score {
      display: flex;
      span:last-child {
        color: #b0b0b0;
      }
    }
  }
`;
const Point = () => {
  return (
    <Container>
      <div className="point">
        <p>나의 도서 점수</p>
        <p>1000P</p>
      </div>
      <ProgressBar
        completed={60}
        isLabelVisible={false}
        bgColor="#8367e1"
        height="10px"
      />
      <div className="level">
        <p>Lv.1</p>
        <div className="score">
          <span>10</span>
          <span>/40</span>
        </div>
      </div>
    </Container>
  );
};

export default Point;
