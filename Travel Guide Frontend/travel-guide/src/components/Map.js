import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ location }) => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = location
    ? { lat: location.lat, lng: location.lng }
    : { lat: 0, lng: 0 };

  return (
    <LoadScript googleMapsApiKey="AIzaSyB481IL4ZxlW9g8HrpFGOJ1pdJafQj1YjQ">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
        {location && <Marker position={center} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
