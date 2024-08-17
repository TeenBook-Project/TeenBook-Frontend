import React, { useState, useEffect } from "react";
import Maps from "../components/library/Maps";
import styled from "styled-components";
import Favorites from "../components/library/Favorites";
import { useRecoilState } from "recoil";
import { FavoritAtom } from "../recoil/FavoritAtom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const MapContainer = styled.div`
  flex-grow: 1;
`;
const TabMenu = styled.div`
  display: flex;
  justify-content: space-around;
  /* padding-bottom: 20px; */
  box-shadow: 0px 5px 5px -2px lightgray;

  .submenu {
    margin-bottom: 10px;
    font-weight: 700;
    color: #9d9d9e;
    cursor: pointer;
  }
  .focused {
    color: #8367e1;
    /* border-bottom: 3px solid #8367e1; */
  }
`;

const LibraryMap = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [favoritItem, setFavortItem] = useRecoilState(FavoritAtom);
  const menuArr = [
    { name: "가까운 매장", content: <Maps /> },
    { name: "자주 찾는 매장", content: <Favorites /> },
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };
  return (
    <Container>
      <Header> </Header>
      <MapContainer>
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
        <div>{menuArr[currentTab].content}</div>
        {/* <Maps /> */}
      </MapContainer>
      <Bottom></Bottom>
    </Container>
  );
};

export default LibraryMap;
