import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import * as satellite from 'satellite.js';
import L from 'leaflet';
import { FaSatellite } from 'react-icons/fa';
import ReactDOMServer from 'react-dom/server';
import 'leaflet/dist/leaflet.css'; 

const SatelliteMap = ({ satelliteId }) => {
  const [satellitePosition, setSatellitePosition] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchSatellitePosition = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/space-weather/satellites?search=${satelliteId}`);
      const data = await response.json();

      if (data.length > 0) {
        const tleLine1 = data[0].line1;
        const tleLine2 = data[0].line2;

        // Get the current date and time
        const now = new Date();

        // Initialize a satellite record
        const satrec = satellite.twoline2satrec(tleLine1, tleLine2);

        // Propagate satellite using current date and time
        const positionAndVelocity = satellite.propagate(satrec, now);

        // Get position in terms of latitude and longitude
        const gmst = satellite.gstime(now);
        const positionGd = satellite.eciToGeodetic(positionAndVelocity.position, gmst);

        // Convert radians to degrees
        const latitude = satellite.degreesLat(positionGd.latitude);
        const longitude = satellite.degreesLong(positionGd.longitude);

        setSatellitePosition([latitude, longitude]);
          setErrorMessage('');
        } else {
          setSatellitePosition(null);
          setErrorMessage('No satellite data found for the given query.');
        }
      } catch (error) {
        console.error(error);
        setSatellitePosition(null);
        setErrorMessage('An error occurred while fetching satellite data.');
      }
    };

    if (satelliteId) {
      fetchSatellitePosition();
    }
  }, [satelliteId]);

  // Define the satellite icon
  const satelliteIcon = L.divIcon({
    html: ReactDOMServer.renderToString(<FaSatellite size={40} color="blue" />),
    className: 'custom-div-icon', 
    iconSize: L.point(30, 30, true),
    iconAnchor: [15, 15] 
  });

  return (
    <div className="satellite-map">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {satellitePosition && (
          <Marker position={satellitePosition} icon={satelliteIcon}>
            <Popup>
              Satellite {satelliteId}<br />Latitude: {satellitePosition[0]}, Longitude: {satellitePosition[1]}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default SatelliteMap;