import React, { useEffect, useState } from "react";
import { Map, MapMarker, MarkerClusterer, Circle } from "react-kakao-maps-sdk";
import CurrentMarker from "../../assets/MyMarker.png";
import LabraryMarker from "../../assets/LibraryMarker.png";
import { fetchLibraries } from "../../api/LibraryAPI";
// 좌표 간 거리를 계산하는 함수 (단위: 미터)
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

const Maps = ({ updateButtonText }) => {
  const [libraries, setLibraries] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [mapLevel, setMapLevel] = useState(10);

  // 필터링을 위한 거리 제한 (예: 500미터)
  const distanceLimit = 3000; // 500미터 이내의 도서관만 표시

  useEffect(() => {
    const loadLibraries = async () => {
      //   try {
      //     const res = await fetch("/api/library");
      //     const data = await res.json();
      //     console.log("인기 대출 도서:", data);

      //     setLibraries(data.SeoulPublicLibraryInfo.row);
      //   } catch (error) {
      //     console.error("Error loading libraries:", error);
      //   }
      // };

      // loadLibraries();
      try {
        const res = await fetch("/api/library");
        const res2 = await fetch("/api/popular");
        const data = await res.json();
        const data2 = await res2.json();
        console.log(data, "도서관 위치");
        console.log(data2, "인기있는 도서");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadLibraries();

    // 테스트용으로 서울의 좌표를 현재 위치로 설정
    //50m in
    // setCurrentPosition({
    //   lat: 37.6874291,
    //   lng: 127.044192,
    // });
    //50m out
    setCurrentPosition({
      lat: 37.6874124,
      lng: 127.0448595,
    });

    // 사용자 현재 위치 가져오기
    /*
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
    */
  }, []);

  useEffect(() => {
    if (currentPosition && libraries.length > 0) {
      const nearLibrary = libraries.some((lib) => {
        const distance = calculateDistance(
          currentPosition.lat,
          currentPosition.lng,
          lib.XCNTS,
          lib.YDNTS
        );
        return distance < 50; // 50미터 이내에 있는지 확인
      });

      if (nearLibrary) {
        updateButtonText("도서관에 도착했습니다!", false);
      } else {
        updateButtonText("도서관 근처가 아닙니다.", true);
      }
    } else {
      updateButtonText("");
    }
  }, [currentPosition, libraries, updateButtonText]);

  // 가까운 도서관만 필터링하는 함수
  const filteredLibraries = libraries.filter((lib) => {
    if (!currentPosition) return false;
    const distance = calculateDistance(
      currentPosition.lat,
      currentPosition.lng,
      lib.XCNTS,
      lib.YDNTS
    );
    return distance <= distanceLimit; // distanceLimit 미터 이내의 도서관만 포함
  });

  const handleMarkerClick = (id) => {
    setSelectedMarker((prev) => (prev === id ? null : id));
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Map
        center={
          currentPosition
            ? { lat: currentPosition.lat, lng: currentPosition.lng }
            : { lat: 37.514575, lng: 127.0495556 }
        }
        style={{ width: "100%", height: "100%" }}
        level={mapLevel}
        onZoomChanged={(map) => setMapLevel(map.getLevel())}
      >
        <MarkerClusterer averageCenter={true} minLevel={10}>
          {filteredLibraries.map((lib) => (
            <div key={lib.LBRRY_SEQ_NO}>
              <MapMarker
                position={{ lat: lib.XCNTS, lng: lib.YDNTS }}
                clickable={true}
                image={{ src: LabraryMarker, size: { width: 32, height: 40 } }}
              ></MapMarker>
              {mapLevel <= 4 && (
                <Circle
                  center={{
                    lat: lib.XCNTS,
                    lng: lib.YDNTS,
                  }}
                  radius={50}
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
        {/*현재 위치 표시 */}
        {currentPosition && mapLevel <= 10 && (
          <div>
            <MapMarker
              position={{ lat: currentPosition.lat, lng: currentPosition.lng }}
              image={{
                src: CurrentMarker,
                size: { width: 20, height: 20 },
              }}
            />
          </div>
        )}
      </Map>
    </div>
  );
};

export default Maps;
