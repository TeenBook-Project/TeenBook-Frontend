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
    object-fit: contain;
  }
`;

const Content = styled.div`
  width: 100%;
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
    color: black;
    margin-bottom: 10px;
  }

  .isbn {
    font-size: 10px;
    color: black;
  }
`;
const BookCard = ({ data, ranking }) => {
  return (
    <CardContainer>
      <div className="rank">
        <BsFillBarChartFill size={10} />
        <p>{ranking}등</p>
      </div>
      <ImageContainer>
        <img src={data.bookImageURL} alt={data.bookname} />
      </ImageContainer>
      <Content>
        <div className="bookname">{data.bookname}</div>
        <div className="author">지은이: {data.authors}</div>
        <div className="isbn">ISBN: {data.isbn13}</div>
      </Content>
    </CardContainer>
  );
};

export default BookCard;
