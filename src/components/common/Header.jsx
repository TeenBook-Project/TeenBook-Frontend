import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { LuShoppingBag } from "react-icons/lu";
import { Link } from "react-router-dom";
import { SignInState } from "../../recoil/SignInAotm";
import { MdLogout } from "react-icons/md";
import { FetchUser, Logout } from "../../api/UserAPI";
import { UserAtom } from "../../recoil/UserAtom";
import { useNavigate } from "react-router-dom";
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
      width: 35px;
      height: 35px;
      border-radius: 70%;
      margin-right: 15px;
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
  const [signIn, setSignIn] = useRecoilState(SignInState);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  // const user = useRecoilValue(UserAtom);
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

  const handlelogout = async () => {
    try {
      await Logout(navigate, setSignIn);
    } catch (error) {
      console.log("logout error", error);
    }
  };
  return (
    <Container>
      <div className="left">
        <img src={user.profile} alt="" />
        <p>{user.userName}</p>
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
