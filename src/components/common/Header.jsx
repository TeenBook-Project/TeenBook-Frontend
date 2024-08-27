import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { LuShoppingBag } from "react-icons/lu";
import img from "../../assets/짱구.jpg";
import { Link } from "react-router-dom";
import { signInState } from "../../recoil/SignInAotm";
import { MdLogout } from "react-icons/md";
import { FetchUser, Logout } from "../../api/UserAPI";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px;
  .left {
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
  .right {
    display: flex;
    align-items: center;
    .logout {
      margin-right: 10px;
    }
  }
`;
const Header = () => {
  const [signIn, setSignIn] = useRecoilState(signInState);
  const [user, setUser] = useState();
  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await FetchUser();
        console.log("내정보", data);
        setUser(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    loadBooks();
  }, []);

  const handlelogout = async () => {
    try {
      await Logout(setSignIn);
    } catch (error) {
      console.log("logout error", error);
    }
  };
  return (
    <Container>
      <div className="left">
        <img src={img} alt="" />
        <p>신짱구</p>
      </div>
      <div className="right">
        {!signIn ? (
          <div>로그인</div>
        ) : (
          <button className="logout" onClick={handlelogout}>
            <MdLogout size={22} />
          </button>
        )}
        <Link to="/Shop">
          <LuShoppingBag size={20} />
        </Link>
      </div>
    </Container>
  );
};

export default Header;
