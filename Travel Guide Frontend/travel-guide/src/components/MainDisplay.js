import React, { useState } from "react";
import "./MainDisplay.css";
import Map from "./Map";
import Weather from "./Weather";

function MainDisplay() {
  const [location, setLocation] = useState(null);

  return (
    <div>
      <h1>Main Display</h1>
      <Map location={location} />
      <Weather setLocation={setLocation} />
    </div>
  );
}

export default MainDisplay;
