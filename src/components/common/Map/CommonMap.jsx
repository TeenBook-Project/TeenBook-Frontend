import React, { useEffect, useState } from "react";
import { Map, MapMarker, MarkerClusterer, Circle } from "react-kakao-maps-sdk";
import CurrentMarker from "../../../assets/MyMarker.png";
import LibraryMarker from "../../../assets/LibraryMarker.png";
import { FaLocationCrosshairs } from "react-icons/fa6";
import styled from "styled-components";
const LIBRARY_API_URL = import.meta.env.VITE_LIBRARY_API_URL;

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

const CommonMap = ({ onClick, currentPosition }) => {
  const [mapLevel, setMapLevel] = useState(10);
  const [map, setMap] = useState(null);
  const [libraries, setLibraries] = useState([]);
  const [hoveredLibrary, setHoveredLibrary] = useState(null); // hover 상태 관리

  useEffect(() => {
    const loadLibraries = async () => {
      try {
        const res = await fetch(`${LIBRARY_API_URL}`);
        const data = await res.json();
        setLibraries(data.SeoulPublicLibraryInfo.row);
      } catch (error) {
        console.error("Error loading libraries:", error);
      }
    };

    loadLibraries();
  }, []);

  const moveToCurrentLocation = () => {
    if (currentPosition && map) {
      map.panTo(
        new kakao.maps.LatLng(currentPosition.lat, currentPosition.lng)
      );
    }
  };

  return (
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
                src: LibraryMarker,
                size: {
                  width: hoveredLibrary === lib.LBRRY_SEQ_NO ? 48 : 32, // hover 시 크기 조정
                  height: hoveredLibrary === lib.LBRRY_SEQ_NO ? 60 : 40, // hover 시 크기 조정
                },
              }}
              onClick={() => onClick(lib)}
              onMouseOver={() => setHoveredLibrary(lib.LBRRY_SEQ_NO)} // hover 시 상태 변경
              onMouseOut={() => setHoveredLibrary(null)} // hover 해제 시 상태 초기화
            />
            {mapLevel <= 5 && (
              <Circle
                center={{
                  lat: lib.XCNTS,
                  lng: lib.YDNTS,
                }}
                radius={100}
                strokeWeight={1}
                strokeColor={"#5479EE"}
                strokeOpacity={1}
                strokeStyle={"solid"}
                fillColor={"#CFE7FF"}
                fillOpacity={0.5}
              />
            )}
          </div>
        ))}
      </MarkerClusterer>
      <LocationButton onClick={moveToCurrentLocation}>
        <FaLocationCrosshairs />
      </LocationButton>
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
  );
};

export default CommonMap;

const LocationButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
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
