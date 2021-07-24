import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import "../styles/pages/orphanages-map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import mapMarkerImg from "../assets/map-marker.svg";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Porto</strong>
          <span>Portugal</span>
        </footer>
      </aside>

      <MapContainer
        center={[41.1621217, -8.6919936]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[41.1621217, -8.6919936]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
