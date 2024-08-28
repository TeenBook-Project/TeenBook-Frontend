import React, { useState, useEffect } from "react";
import { FaCoins } from "react-icons/fa6";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ItemBox from "../components/shop/ItemBox";
import styled from "styled-components";
import { FetchUser } from "../api/UserAPI";
const Container = styled.div`
  .back-button {
    font-size: 15px;
    font-weight: bold;
    color: #5479ee;
    margin: 10px 5px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 20px;
    .left {
      font-size: 20px;
      font-weight: bold;
    }
    .right {
      font-weight: bold;
      .point {
        display: flex;
        margin-top: 8px;
        div {
          margin: 2px;
          line-height: 10px;
        }
      }
    }
  }
  .item {
    margin: 20px;
  }
`;
const Shop = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await FetchUser();
        setUser(data.result[0]);
      } catch (error) {
        console.log("error", error);
      }
    };
    loadUser();
  }, []);

  return (
    <Container>
      <button onClick={() => navigate(-1)} className="back-button">
        <IoChevronBack color="blue" />
        뒤로가기
      </button>
      <div className="header">
        <div className="left">안전 포인트 샵</div>
        <div className="right">
          <div>Lv.{user.level}</div>
          <div className="point">
            <div>{user.point}</div>
            <FaCoins color="gray" />
          </div>
        </div>
      </div>
      <div className="item">
        <ItemBox level={user.level} point={user.point} />
      </div>
    </Container>
  );
};

export default Shop;
