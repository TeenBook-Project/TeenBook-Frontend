import React from "react";
import { useEffect, useState } from "react";
import { fetchLibraries } from "../api/LibraryAPI";
import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";
const Maps = () => {
  const [libraries, setLibraries] = useState([]);

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
  return (
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
          >
            {/* <div style={{ color: "#000" }}>Hello World!</div> */}
          </MapMarker>
        ))}
      </MarkerClusterer>
    </Map>
  );
};

export default Maps;
