import React, { useState } from "react";
import ReactMapGl from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 17.4904788647724,
    longitude: 78.46079610367127,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  return (
    <div>
      {" "}
      <ReactMapGl
        {...viewport}
        mapboxAccessToken={
          "pk.eyJ1IjoiYmliaW50aG9tYXM5NTEiLCJhIjoiY2xlcjB2aGlmMGFsaTQzcGs0ODZxNTBoaSJ9.LHuJ5hyYkpavtSb3o1xuSQ"
        }
        mapStyle="mapbox://styles/leighhalliday/cjufmjn1r2kic1fl9wxg7u1l4"
      >
        hey there
      </ReactMapGl>
    </div>
  );
}
