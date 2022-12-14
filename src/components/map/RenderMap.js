import React, { useState } from 'react'
import { useRef } from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet'
import osm from './Osm-providers';
import "leaflet/dist/leaflet.css";
import './Map.scss';
import {} from './Data'

function RenderMap() {
  const [center, setCenter] = useState({lat: 0.0236, lng: 37.9062});
  const ZOOM_LEVEL = 6;
  const mapRef = useRef();


  return (
    <div className='leaflet-container' >
      <h1>Kenya</h1>
      <MapContainer
        center={center}
        zoom={ZOOM_LEVEL}
        ref={mapRef}
      >
        <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
      </MapContainer>
    </div>
  )
}

export default RenderMap
