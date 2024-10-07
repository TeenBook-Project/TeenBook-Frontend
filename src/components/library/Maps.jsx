import React, { useEffect, useState } from "react";
import InfoModal from "./InfoModal";
import styled from "styled-components";
import CommonMap from "../common/Map/CommonMap";

const Maps = () => {
  const [selectedLibrary, setSelectedLibrary] = useState(null); // 선택된 도서관 정보
  const [currentPosition, setCurrentPosition] = useState(null);
  // 필터링을 위한 거리 제한 (예: 3km)
  const distanceLimit = 5000;

  useEffect(() => {
    // 테스트용으로 서울의 좌표를 현재 위치로 설정
    setCurrentPosition({
      lat: 37.6876674374375,
      lng: 127.044019937677,
    });

    // 사용자 현재 위치 가져오기
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     setCurrentPosition({
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude,
    //     });
    //   },
    //   (error) => {
    //     console.error("Error getting current position:", error);
    //   }
    // );
  }, []);

  // 가까운 도서관만 필터링하는 함수
  // const filteredLibraries = library.filter((lib) => {
  //   if (!currentPosition) return false;
  //   const distance = calculateDistance(
  //     currentPosition.lat,
  //     currentPosition.lng,
  //     lib.XCNTS,
  //     lib.YDNTS
  //   );
  //   return distance <= distanceLimit; // distanceLimit 미터 이내의 도서관만 포함
  // });

  // 선택된 도서관 정보를 설정하고 모달 열기
  const handleMarkerClick = (library) => {
    setSelectedLibrary(library);
  };
  // 모달 닫기
  const handleCloseModal = () => {
    setSelectedLibrary(null);
  };

  return (
    <Container style={{ width: "100%", height: "100%" }}>
      <CommonMap
        onClick={handleMarkerClick}
        currentPosition={currentPosition}
      />
      {/* 도서관 정보 모달 표시 */}
      <InfoModal
        isOpen={selectedLibrary !== null}
        onClose={handleCloseModal}
        library={selectedLibrary}
      ></InfoModal>
    </Container>
  );
};

export default Maps;

const Container = styled.div`
  position: relative;
`;
