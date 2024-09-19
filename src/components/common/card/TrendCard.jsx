import React from "react";
import styled from "styled-components";
import { BsFillBarChartFill } from "react-icons/bs";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 40px 40px;
  position: relative;

  .rank {
    display: flex;
    position: absolute;
    top: 0;
    left: 10px;
    border: 2px solid black;
    border-radius: 20px;
    background-color: white;
    padding: 5px;
    font-size: 10px;
    margin: 10px;
    z-index: 1;

    p {
      margin-left: 3px;
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  padding: 20px;

  img {
    /* max-width: 100%;
    max-height: 70%; */
    object-fit: contain;
  }
`;

const Content = styled.div`
  width: 100%;
  /* height: 20%; */
  padding: 20px 20px 30px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 20px;
  position: fixed;
  bottom: 0;

  .bookname {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.2rem;
    margin-bottom: 10px;
  }

  .author {
    font-size: 0.7rem;
    line-height: 1rem;
    color: black;
    margin-bottom: 10px;
  }

  .isbn {
    font-size: 10px;
    color: black;
  }
`;

const TrendCard = ({ data, ranking }) => {
  const thumbnail = data?.thumbnail_url || "default_image_url"; // 기본 이미지 URL 설정
  const title = data?.title || "제목 없음";
  const info = data?.info || "정보 없음";
  const isbn = data?.hb_IBSN || "ISBN 정보 없음";
  return (
    <CardContainer>
      <div className="rank">
        <BsFillBarChartFill size={10} />
        {/* {rank.map((e) => (
          <p key={e.ranking}>{e.ranking}등</p>
        ))} */}
        <p>{ranking}등</p>
      </div>
      <ImageContainer>
        <img src={thumbnail} alt={title} />
      </ImageContainer>
      <Content>
        <div className="bookname">{title}</div>
        <div className="author">{info}</div>
        <div className="isbn">ISBN: {isbn}</div>
      </Content>
    </CardContainer>
  );
};

export default TrendCard;
