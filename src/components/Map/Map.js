import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const position = [23.7956, 90.3537];

const Map = () => {
  return (
    <div className="my-10 z-10">
      <MapContainer className="mx-auto rounded w-[300px] h-[300px] lg:w-[90%] lg:h-[400px]" center={position} zoom={12}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Mirpur 1, Dhaka , Bangladesh</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
