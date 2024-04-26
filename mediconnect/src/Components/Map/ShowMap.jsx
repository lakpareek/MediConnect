import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

function ShowMap() {
  useEffect(() => {
    // Initialize mapbox
    mapboxgl.accessToken = 'pk.eyJ1IjoibGFrcGFyZWVrIiwiYSI6ImNsdmVmNXJ5aTAyMG0yam4wNG14cDJnNmsifQ.c6sowoYCLVCxh_7abw9VAQ'; // Replace with your Mapbox access token

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40], // Starting position [lng, lat]
      zoom: 9 // Starting zoom
    });

    // Add markers or any other map functionalities here

    return () => {
      // Cleanup mapbox
      map.remove();
    };
  }, []);

  return (
    <>
      {/* Mapbox Scripts in Head */}
      <script src="https://api.tiles.mapbox.com/mapbox-gl-js/v3.1.0/mapbox-gl.js"></script>
      <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v3.1.0/mapbox-gl.css" rel="stylesheet" />

      {/* Body Content */}
      <div className="sidebar">
        <div className="heading">
          <h1>Hospitals Near you</h1>
        </div>
        <div id="listings" className="listings"></div>
      </div>
      <div id="map" className="map"></div>

      {/* CSS Styles */}
      <style>
        {`
          * {
            box-sizing: border-box;
          }

          body {
            color: #404040;
            font: 400 15px/22px 'Source Sans Pro', 'Helvetica Neue', sans-serif;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
          }

          h1 {
            font-size: 22px;
            margin: 0;
            font-weight: 400;
            line-height: 20px;
            padding: 20px 2px;
          }

          a {
            color: #404040;
            text-decoration: none;
          }

          a:hover {
            color: #101010;
          }

          .sidebar {
            position: absolute;
            width: 33.3333%;
            height: 100%;
            top: 0;
            left: 0;
            overflow: hidden;
            border-right: 1px solid rgb(0 0 0 / 25%);
          }

          .map {
            position: absolute;
            left: 33.3333%;
            width: 66.6666%;
            top: 0;
            bottom: 0;
          }

          .heading {
            background: #fff;
            border-bottom: 1px solid #eee;
            height: 60px;
            line-height: 60px;
            padding: 0 10px;
          }
        `}
      </style>
    </>
  );
}

export default ShowMap;
