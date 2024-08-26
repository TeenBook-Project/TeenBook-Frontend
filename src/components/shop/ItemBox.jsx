import React, { useState } from "react";
import data from "../../../public/mockData.json";
import styled from "styled-components";
import { FaCoins } from "react-icons/fa6";
const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  font-size: 13px;
  .item-box {
    background-color: white;
    border-radius: 10px;
    padding: 10px;
  }
  .name {
    font-weight: bold;
    margin-bottom: 10px;
  }
  .content {
    display: flex;
    .left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 0 10px 5px 0;
      font-size: 12px;
      span {
        margin-right: 5px;
        font-weight: bold;
      }
    }
    img {
      border-radius: 15px;
      border: 3px solid rgba(238, 235, 235, 0.5);
    }
  }
`;
const ItemBox = () => {
  const [userLevel, setUserLevel] = useState(2);
  const [userPoint, setUserPoint] = useState(6000);

  const handleClick = (item) => {
    const itemLevel = parseInt(item.level.replace(/[^0-9]/g, ""), 10); // "레벨 1 이상"에서 숫자만 추출
    const itemPrice = parseInt(item.price.replace(/,/g, ""), 10); // "4,500"에서 숫자만 추출

    if (userLevel >= itemLevel && userPoint >= itemPrice) {
      alert(`${item.name}을(를) 구매완료했습니다.`);
    } else if (userLevel < itemLevel) {
      alert(
        `레벨이 부족합니다. 이 아이템은 ${item.level} 이상만 구매 가능합니다.`
      );
    } else if (userPoint < itemPrice) {
      alert(
        `포인트가 부족합니다. 이 아이템은 ${item.price} 포인트가 필요합니다.`
      );
    }
  };
  return (
    <ItemContainer>
      {data.item.map((i) => (
        <button key={i.id} className="item-box" onClick={() => handleClick(i)}>
          <div className="name">{i.name}</div>
          <div className="content">
            <div className="left">
              <div className="price">
                <span>{i.price}</span>
                <FaCoins color="gold" />
              </div>
              <div>{i.level}</div>
            </div>
            <img src={i.img} alt={i.name} width={80} height={80} />
          </div>
        </button>
      ))}
    </ItemContainer>
  );
};

export default ItemBox;
