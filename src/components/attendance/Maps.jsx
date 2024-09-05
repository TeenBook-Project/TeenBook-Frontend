import React, { useEffect, useState } from "react";
import { Map, MapMarker, MarkerClusterer, Circle } from "react-kakao-maps-sdk";
import CurrentMarker from "../../assets/MyMarker.png";
import LabraryMarker from "../../assets/LibraryMarker1.png";
import SelectedLibraryMarker from "../../assets/SelectedMarker1.png"; // 클릭된 마커의 이미지
import { fetchLibraries } from "../../api/LibraryAPI";
import { FaLocationCrosshairs } from "react-icons/fa6";

import styled from "styled-components";

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
  const [libraries, setLibraries] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [selectedLibraryId, setSelectedLibraryId] = useState(null); // 선택된 마커의 ID
  const [mapLevel, setMapLevel] = useState(10);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const loadLibraries = async () => {
      try {
        const data = await fetchLibraries();
        setLibraries(data.SeoulPublicLibraryInfo.row);
      } catch (error) {
        console.error("Error loading libraries:", error);
      }
    };

    loadLibraries();

    // 사용자의 현재 위치 설정 (테스트용)
    setCurrentPosition({
      lat: 37.687194,
      lng: 127.0437871,
    });
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

  const handleMarkerClick = (lib) => {
    const distance = calculateDistance(
      currentPosition.lat,
      currentPosition.lng,
      lib.XCNTS,
      lib.YDNTS
    );

    // 마커 클릭 시 선택된 도서관 ID 저장 및 시각적 강조
    setSelectedLibraryId(lib.LBRRY_SEQ_NO);

    if (distance < 100) {
      setSelectedLibrary(lib); // 선택된 도서관 저장
      updateButtonText("도서관에 도착했습니다!", false); // 버튼 활성화
    } else {
      setSelectedLibrary(null); // 선택된 도서관 해제
      updateButtonText("선택한 도서관이 너무 멀리 있습니다.", true); // 버튼 비활성화
    }
  };

  const moveToCurrentLocation = () => {
    if (currentPosition && map) {
      map.panTo(
        new kakao.maps.LatLng(currentPosition.lat, currentPosition.lng)
      );
    }
  };

  return (
    <Container style={{ width: "100%", height: "100%" }}>
      <Map
        center={
          currentPosition
            ? { lat: currentPosition.lat, lng: currentPosition.lng }
            : { lat: 37.514575, lng: 127.0495556 }
        }
        style={{ width: "100%", height: "100%" }}
        level={mapLevel}
        onZoomChanged={(map) => setMapLevel(map.getLevel())}
        onCreate={setMap}
      >
        <MarkerClusterer averageCenter={true} minLevel={10}>
          {libraries.map((lib) => (
            <div key={lib.LBRRY_SEQ_NO}>
              <MapMarker
                position={{ lat: lib.XCNTS, lng: lib.YDNTS }}
                clickable={true}
                image={{
                  src:
                    selectedLibraryId === lib.LBRRY_SEQ_NO
                      ? SelectedLibraryMarker // 클릭된 마커의 이미지
                      : LabraryMarker, // 기본 마커 이미지
                  size: { width: 24, height: 34 },
                }}
                onClick={() => handleMarkerClick(lib)}
              ></MapMarker>
              {mapLevel <= 5 && (
                <Circle
                  center={{
                    lat: lib.XCNTS,
                    lng: lib.YDNTS,
                  }}
                  radius={100}
                  strokeWeight={1} // 선의 두께
                  strokeColor={"#5479EE"} // 선의 색깔
                  strokeOpacity={1} // 선의 불투명도
                  strokeStyle={"solid"} // 선의 스타일
                  fillColor={"#CFE7FF"} // 채우기 색깔
                  fillOpacity={0.5} // 채우기 불투명도
                />
              )}
            </div>
          ))}
        </MarkerClusterer>
        <LocationButton onClick={moveToCurrentLocation}>
          <FaLocationCrosshairs />
        </LocationButton>
        {/* 현재 위치 표시 */}
        {currentPosition && (
          <MapMarker
            position={{ lat: currentPosition.lat, lng: currentPosition.lng }}
            image={{
              src: CurrentMarker,
              size: { width: 20, height: 20 },
            }}
          />
        )}
      </Map>
    </Container>
  );
};

export default Maps;

const Container = styled.div`
  position: relative;
`;
const LocationButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 10px;
  background-color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
`;
