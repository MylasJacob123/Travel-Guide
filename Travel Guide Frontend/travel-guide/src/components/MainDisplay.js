import React from "react";
import "./MainDisplay.css";
import Map from "./Map";
import Weather from "./Weather";

function MainDisplay() {
  return (
    <div>
        <h1>Main Display</h1>
        <Map />
        <Weather />
    </div>
  )
};
export default MainDisplay;