import React from "react";
import "./ya-map.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const YaMap = () => {
  return (
    <YMaps query={{ apikey: "b8096766-4bd2-4f9e-bd21-ac7e4a45fe72" }}>
      <div style={{ overflowY: "hidden" }}>
        <Map
          defaultState={{
            center: [40.5484, 44.94868],
            zoom: 9,
          }}
          width={"500px"}
          height={"400px"}
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            height: "500px",
            width: "100%",
            top: "-500px",
          }}
        >
          <div className="mher">
            <Placemark geometry={[40.5484, 44.94868]} />
          </div>
          {/* Добавьте Placemark для метки */}
        </Map>
      </div>
    </YMaps>
  );
};

export default YaMap;
