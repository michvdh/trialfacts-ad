import { MapContainer, Marker, TileLayer, Tooltip, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const Map = () => {
  const position = [-33.88164791628543, 151.04886507116402];

  return (
    <div className="w-full lg:w-2/4 h-96 2xl:w-96 2xl:h-96 flex flex-col justify-center items-center gap-3 drop-shadow-lg">
      <h2 className="font-bold text-2xl font-sans">Trial Location</h2>
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Trial Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
