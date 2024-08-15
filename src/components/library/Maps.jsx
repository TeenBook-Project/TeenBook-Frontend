import React from "react";
import { useEffect, useState } from "react";
import { fetchLibraries } from "../../api/LibraryAPI";
import LibraryInfoWindow from "./LibraryInfoWindow";
import {
  Map,
  MapMarker,
  MarkerClusterer,
  CustomOverlayMap,
} from "react-kakao-maps-sdk";
const Maps = () => {
  const [libraries, setLibraries] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

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
  }, []);

  const handleMarkerClick = (id) => {
    // 이미 선택된 마커를 다시 클릭하면 닫고, 그렇지 않으면 새 마커 열기
    setSelectedMarker((prev) => (prev === id ? null : id));
  };
  return (
    <div>
      <Map
        center={{ lat: 37.514575, lng: 127.0495556 }}
        style={{ width: "100%", height: "100vh" }}
        level={10}
      >
        <MarkerClusterer averageCenter={true} minLevel={10}>
          {libraries.map((lib) => (
            <MapMarker
              key={lib.LBRRY_SEQ_NO}
              position={{ lat: lib.XCNTS, lng: lib.YDNTS }}
              onClick={() => handleMarkerClick(lib.LBRRY_SEQ_NO)}
              clickable={true}
            >
              {selectedMarker === lib.LBRRY_SEQ_NO && (
                <LibraryInfoWindow
                  library={lib}
                  onClose={() => setSelectedMarker(null)}
                />
              )}
            </MapMarker>
          ))}
        </MarkerClusterer>
      </Map>
    </div>
  );
};

export default Maps;
