import React, { useState, useEffect } from "react";
import "./MainDisplay.css";
import Map from "./Map";
import Weather from "./Weather";

function MainDisplay() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (!location) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    }
  }, [location]);

  return (
    <div>
      <h1>Main Display</h1>
      <Map location={location} />
      <Weather setLocation={setLocation} initialLocation={location} />
    </div>
  );
}

export default MainDisplay;
