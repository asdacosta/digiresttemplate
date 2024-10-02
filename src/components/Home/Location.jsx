import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Location.css";

function Location() {
  return (
    <section
      style={{
        zIndex: "5",
        width: "50%",
        border: "0.15rem solid rgb(255, 136, 0)",
        borderRadius: "1rem",
        overflow: "hidden",
      }}
    >
      <MapContainer
        center={[5.6037, -0.187]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "29rem", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[5.6037, -0.187]}>
          <Popup>
            This is Accra, Ghana. <br /> Welcome!
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

export { Location };
