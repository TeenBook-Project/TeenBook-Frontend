import React from "react";
import Maps from "../components/library/Maps";
import styled from "styled-components";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  .back-button {
    align-self: flex-start;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
  }

  .attendance {
    margin: 10px auto 0; /* 화면 중앙에 배치, 위쪽에 마진 추가 */
    width: 300px;
    height: 40px;
    background-color: #957fe2;
    border-radius: 20px;
    display: flex;
    justify-content: center; /* 텍스트 수평 중앙 정렬 */
    align-items: center; /* 텍스트 수직 중앙 정렬 */
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  .attendance {
    width: 300px;
    height: 40px;
    background-color: #957fe2;
    border-radius: 20px;
    line-height: 40px;
    text-align: center;
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
`;

const MapContainer = styled.div`
  flex-grow: 1; /* 남은 공간을 모두 차지 */
`;
const LibraryMap = () => {
  const navigate = useNavigate(); //변수 할당시켜서 사용
  const onClickBtn = () => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };
  return (
    <Container>
      <Header>
        <button className="back-button" onClick={onClickBtn}>
          <IoChevronBack />
          뒤로가기
        </button>
        <div className="attendance">도서관 출석이 가능해요</div>
      </Header>
      <MapContainer>
        <Maps />
      </MapContainer>
      <Bottom>
        <div className="attendance">출석하기</div>
      </Bottom>
    </Container>
  );
};

export default LibraryMap;
