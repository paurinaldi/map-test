// src/components/WorldMap.js
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";

// Coordenadas para los pines
const pins = [
  { name: "Costa Rica", coordinates: [-83.7534, 9.7489] },
  { name: "USA", coordinates: [-100.0, 40.0] },
  { name: "Brazil", coordinates: [-55.0, -10.0] },
  // Añade más pines aquí...
];

const WorldMap = ({ onCountryClick }) => {
  return (
    <div className="w-full">
      <ComposableMap
        style={{ width: "100%" }}
        className="h-1/2 w-full"
        projectionConfig={{ scale: 230 }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  const { ADMIN } = geo.properties;
                  console.log(`Hovered over: ${ADMIN}`);
                }}
                onClick={() => {
                  const { ADMIN } = geo.properties;
                  onCountryClick(ADMIN);
                }}
                style={{
                  default: {
                    fill: "#1a1a1a",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
        {pins.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={4} fill="#F53" stroke="#fff" strokeWidth={2} />
            <text
              textAnchor="middle"
              y={-10}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
