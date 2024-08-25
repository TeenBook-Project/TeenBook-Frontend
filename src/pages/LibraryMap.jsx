import React, { useState, useEffect } from "react";
import Maps from "../components/library/Maps";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styled from "styled-components";
import Favorites from "../components/library/Favorites";
import { useRecoilState } from "recoil";
import { FavoritAtom } from "../recoil/FavoritAtom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MapContainer = styled.div`
  flex: 1;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const TabMenu = styled.div`
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 5px 5px -2px lightgray;

  .submenu {
    margin-bottom: 10px;
    font-weight: 700;
    color: #9d9d9e;
    cursor: pointer;
  }
  .focused {
    color: #8367e1;
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
      <Header />

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
      </MapContainer>
      <Footer />
    </Container>
  );
};

export default LibraryMap;
