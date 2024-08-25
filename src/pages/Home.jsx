import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import TrendingBooks from "../components/common/carousel/TrendingBooks";
import PopularBookRank from "../components/common/carousel/PopularBookRank";
import bell from "../assets/3d-mini-bell 1.png";
import book from "../assets/book.png";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 300px);
  /* justify-content: space-between; */
`;

const Bottom = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
`;
const TabMenu = styled.div`
  display: flex;
  align-items: center;
  width: 328px;
  height: 48px;
  background-color: #d7d7e8;
  border-radius: 25px;
  margin: 20px auto;
  flex-shrink: 0;

  .submenu {
    color: #9d9d9e;
    cursor: pointer;
    flex: 1;
    text-align: center;
  }
  .focused {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 166px;
    height: 38px;
    border-radius: 25px;
    background-color: rgb(131, 103, 225, 0.7);
    color: white;
    margin: 0 5px;
  }
`;
const TabContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  /* margin-left: 20px; */
  margin: 0 20px;
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 10px;

  .button-box {
    width: 170px;
    height: 120px;
    padding: 15px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    font-size: 16px;
    font-weight: bold;
    text-decoration: none;

    .content {
      display: flex;

      justify-content: space-between;
      font-size: 7px;
      font-weight: 500;
      color: #b1b1b1;
      margin-top: 5px;
      p {
      }
    }
  }
`;
const Home = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const menuArr = [
    { name: "대출 급상승 도서", content: <TrendingBooks /> },
    { name: "인기 대출 도서", content: <PopularBookRank /> },
  ];
  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };
  return (
    <Container>
      <Header />
      <MainContent>
        <TabMenu>
          {menuArr.map((tap, index) => {
            return (
              <div
                key={index}
                className={currentTab === index ? "submenu focused" : "submenu"}
                onClick={() => selectMenuHandler(index)}
              >
                {tap.name}
              </div>
            );
          })}
        </TabMenu>
        <TabContent>{menuArr[currentTab].content}</TabContent>
      </MainContent>
      <Menu>
        <Link to="/AttendanceMap" className="button-box">
          <p>출석하기</p>
          <div className="content">
            <p>
              출석 인증 시 <br />
              경험치 획득
            </p>
            <img src={bell} alt="bell" />
          </div>
        </Link>
        <Link to="/Loan" className="button-box">
          <p>대출하기</p>
          <div className="content">
            <p>급상승 도서 및 인기도서 대출 시 포인트 획득</p>
            <img src={book} alt="book" width={85} height={85} />
          </div>
        </Link>
      </Menu>
      <Bottom>
        <Footer />
      </Bottom>
    </Container>
  );
};

export default Home;
