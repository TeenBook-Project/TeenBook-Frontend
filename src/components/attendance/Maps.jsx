import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CommonMap from "../common/Map/CommonMap";
// 거리 계산 함수
const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371e3; // 지구 반지름 (미터)
  const rad = (deg) => (deg * Math.PI) / 180;
  const φ1 = rad(lat1);
  const φ2 = rad(lat2);
  const Δφ = rad(lat2 - lat1);
  const Δλ = rad(lng2 - lng1);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // 거리 (미터)
};

const Maps = ({ updateButtonText, setSelectedLibrary }) => {
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    // 사용자의 현재 위치 설정 (테스트용, 실제 위치 가져오도록 수정 필요)
    // setCurrentPosition({
    //   lat: 37.5519062,
    //   lng: 126.9796763,
    // });
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting current position:", error);
      }
    );
  }, []);

  // 마커 클릭 시 선택한 도서관과 거리 확인
  const handleMarkerClick = (lib) => {
    const distance = calculateDistance(
      currentPosition.lat,
      currentPosition.lng,
      lib.XCNTS,
      lib.YDNTS
    );

    if (distance < 100) {
      setSelectedLibrary(lib); // 선택된 도서관 저장
      updateButtonText("도서관에 도착했습니다!", false); // 버튼 활성화
    } else {
      setSelectedLibrary(null); // 선택된 도서관 해제
      updateButtonText("선택한 도서관이 너무 멀리 있습니다.", true); // 버튼 비활성화
    }
  };

  return (
    <Container style={{ width: "100%", height: "100%" }}>
      <CommonMap
        onClick={handleMarkerClick}
        currentPosition={currentPosition}
      />
    </Container>
  );
};

export default Maps;
const Container = styled.div`
  position: relative;
`;
