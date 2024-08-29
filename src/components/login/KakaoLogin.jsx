import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { HiMiniChatBubbleOvalLeft } from "react-icons/hi2";
import { PostUser } from "../../api/UserAPI";
import styled from "styled-components";
import { SignInState } from "../../recoil/SignInAotm";
import { UserAtom } from "../../recoil/UserAtom";
const K_JS_API_KEY = import.meta.env.VITE_K_JS_API_KEY;
// const API_URL =
//   import.meta.env.MODE === "development"
//     ? import.meta.env.VITE_DEVELOP_API_URL
//     : import.meta.env.VITE_API_URL;
// const API_URL =
//   import.meta.env.MODE === "development"
//     ? import.meta.env.VITE_DEVELOP_API_URL
//     : import.meta.env.VITE_API_URL;

// console.log("API URL:", API_URL);
// console.log("Current environment:", import.meta.env.MODE);
// console.log("API URL:", API_URL);
// console.log("Current environment:", import.meta.env.MODE);

const KAKAO = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 45px;
  /* margin-top: 220px; */
  background-color: #fee500;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;

  p {
    margin-left: 5px;
  }
`;

const KakaoLogin = () => {
  const [signIn, setSignIn] = useRecoilState(SignInState);
  const [user, setUser] = useRecoilState(UserAtom);
  const navigate = useNavigate();
  useEffect(() => {
    // 카카오 SDK 초기화
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(K_JS_API_KEY); // 카카오 JavaScript 키로 초기화
    }
  }, []);
  const handleLogin = async () => {
    try {
      await new Promise((resolve, reject) => {
        window.Kakao.Auth.login({
          success: resolve,
          fail: reject,
        });
      });

      const response = await new Promise((resolve, reject) => {
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: resolve,
          fail: reject,
        });
      });

      const { id, kakao_account } = response;
      const { profile } = kakao_account;

      const userId = id.toString();
      const userData = {
        userId: userId,
        userName: profile.nickname,
        profile: profile.profile_image_url,
      };
      console.log("데이터:", userData);
      await PostUser(userData, navigate, setSignIn);
      setUser(userData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <KAKAO onClick={handleLogin}>
      <HiMiniChatBubbleOvalLeft />
      <p>카카오로 시작하기</p>
    </KAKAO>
  );
};

export default KakaoLogin;
