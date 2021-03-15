import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const MapSection = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  const layersProviders = {
    ru: 'https://api.maptiler.com/maps/37e3d793-5e44-4196-b65f-69f63fe6c064/style.json?key=DYJAfPLBB3mQR8JZ4FtV',
    en: 'https://api.maptiler.com/maps/4e87582d-2a6f-492c-bcaa-4caae218170d/style.json?key=DYJAfPLBB3mQR8JZ4FtV',
  };

  return (
      <>
          <ReactMapGL
            {...viewport}
            mapStyle={layersProviders.ru}
            mapboxApiAccessToken="pk.eyJ1IjoiaGVydGFzIiwiYSI6ImNrbTkzNmNiaDFlMW8ycGtubjE0cWN6bGUifQ.2Kv0W8Q7Q3l7ZR0Uu5Zjtg"
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
          />
      </>
  );
};

export default MapSection;
