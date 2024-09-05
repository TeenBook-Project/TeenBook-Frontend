import React from "react";
import styled from "styled-components";
import KakaoLogin from "../components/login/KakaoLogin";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(to top, white, #8367e1, #8367e1);

  .app-contnet {
    flex-grow: 1;
    padding: 100px 50px;
    color: white;
    p:nth-child(1) {
      font-size: 30px;
      margin-bottom: 8px;
    }
    p:nth-child(2) {
      font-size: 25px;
      margin-bottom: 10px;
    }
    p:nth-child(3) {
      font-size: 15px;
      font-weight: 300;
    }
  }
  .login {
    margin: 0 auto 50px;
  }
`;
const Login = () => {
  return (
    <Container>
      <div className="app-contnet">
        <p>TeenBook</p>
        <p>청소년을 위한 도서관</p>
        <p>#기록 #통계 #인증</p>
      </div>
      <div className="login">
        <KakaoLogin />
      </div>
    </Container>
  );
};

export default Login;
