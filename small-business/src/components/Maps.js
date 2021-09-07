import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Maps(props) {
  const containerStyle = {
    width: "600px",
    height: "500px",
  };

  return (
    <div id="mapContainer">
      <LoadScript googleMapsApiKey="AIzaSyAtbxfNcSuqkQbvndVNIExOIgrGs3u4zcE">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{
            lat: props.address.lat,
            lng: props.address.lng,
          }}
          zoom={13}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <Marker
            position={{ lat: props.address.lat, lng: props.address.lng }}
          />
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Maps;
