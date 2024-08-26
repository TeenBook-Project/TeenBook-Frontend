import React from "react";
import styled from "styled-components";
import { LuShoppingBag } from "react-icons/lu";
import img from "../../assets/짱구.jpg";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px;
  .profile {
    display: flex;
    align-items: center;

    font-weight: bold;
    img {
      width: 30px;
      height: 30px;
      border-radius: 70%;
      margin-right: 20px;
    }
  }
`;
const Header = () => {
  return (
    <Container>
      <div className="profile">
        <img src={img} alt="" />
        <p>신짱구</p>
      </div>
      <Link to="/Shop">
        <LuShoppingBag size={20} />
      </Link>
    </Container>
  );
};

export default Header;
