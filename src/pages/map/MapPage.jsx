import * as React from 'react';
import Map from 'react-map-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

// import * as React from 'react';
// import Map from 'react-map-gl';
// import maplibregl from 'maplibre-gl';
// import 'maplibre-gl/dist/maplibre-gl.css';

const MapPage = () => {
  return (
    <div>
      {/* <Map mapLib={maplibregl} /> */}
      <Map
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
};

export default MapPage;
