import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, ZoomControl } from 'react-leaflet';
import pakistanData from '../assets/PAK_adm0.json';
import L from 'leaflet';
import './PakistanMap.css';

function PakistanMap() {
  const mapStyle = {
    fillColor: "#d4e6f1",
    color: "#1f618d",
    weight: 2,
    fillOpacity: 0.4,
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    alert(`Search for: ${searchTerm}`);
    // Here you could add logic to zoom into specific areas if you have their coordinates
  };

  return (
    <div className="map-container">
      {/* Custom search bar */}
      <div className="custom-search">
        <input
          type="text"
          placeholder="Search district..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <MapContainer
        center={[30.3753, 69.3451]}
        zoom={6}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON data={pakistanData} style={mapStyle} />
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
}

export default PakistanMap;
