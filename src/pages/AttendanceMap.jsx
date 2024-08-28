import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Maps from "../components/attendance/Maps";
import { PostAttendance } from "../api/AttendanceAPI";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 6px;

  .back-button {
    align-self: flex-start;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
  }
`;

const AttendanceText = styled.div`
  margin: 10px auto 0;
  width: 300px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: ${({ isDisabled }) => (isDisabled ? "#a9a9a9" : "white")};
  background-color: ${({ isDisabled }) => (isDisabled ? "#d3d3d3" : "#957fe2")};
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const AttendanceButton = styled.button`
  width: 300px;
  height: 40px;
  background-color: ${({ isDisabled }) => (isDisabled ? "#d3d3d3" : "#957fe2")};
  border-radius: 20px;
  line-height: 40px;
  text-align: center;
  color: ${({ isDisabled }) => (isDisabled ? "#a9a9a9" : "white")};
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
`;

const MapContainer = styled.div`
  flex-grow: 1;
`;

const AttendanceMap = () => {
  const [buttonText, setButtonText] = useState(
    "마커를 클릭해 도서관을 선택하세요."
  );
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [selectedLibrary, setSelectedLibrary] = useState(null);
  const navigate = useNavigate();

  const onClickBtn = async () => {
    if (!buttonDisabled && selectedLibrary) {
      const LibraryData = {
        LBRRY_SEQ_NO: Number(selectedLibrary.LBRRY_SEQ_NO),
      };
      // console.log("data", LibraryData);
      await PostAttendance(navigate, LibraryData);
    }
  };

  const updateButtonText = (text, disabled) => {
    setButtonText(text);
    setButtonDisabled(disabled);
  };

  return (
    <Container>
      <Header>
        <button className="back-button" onClick={() => navigate(-1)}>
          <IoChevronBack size={25} />
          뒤로가기
        </button>
        <AttendanceText isDisabled={buttonDisabled}>
          {buttonText}
        </AttendanceText>
      </Header>
      <MapContainer>
        <Maps
          updateButtonText={updateButtonText}
          setSelectedLibrary={setSelectedLibrary}
        />
      </MapContainer>
      <Bottom>
        <AttendanceButton isDisabled={buttonDisabled} onClick={onClickBtn}>
          출석하기
        </AttendanceButton>
      </Bottom>
    </Container>
  );
};

export default AttendanceMap;
