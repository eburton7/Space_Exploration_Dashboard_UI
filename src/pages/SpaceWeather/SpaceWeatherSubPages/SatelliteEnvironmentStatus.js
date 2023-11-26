import React, { useState, useEffect } from 'react';
import './SatelliteEnvironmentStatus.css'; 

// Mock data or API call can go here
const mockSatelliteData = {
  status: "Stable",
  message: "No significant solar activity affecting satellite operations.",
  alerts: ["Increased solar wind speed detected", "Minor geomagnetic fluctuations"]
};

const SatelliteEnvironmentStatus = () => {
  const [satelliteData, setSatelliteData] = useState(mockSatelliteData);

  // In future, replace mock data with API call to fetch real-time data
  // useEffect(() => { fetchSatelliteData(); }, []);

  return (
    <div className="satellite-environment-status">
      <h2>Satellite Environment Status</h2>
      <p>Status: <strong>{satelliteData.status}</strong></p>
      <p>{satelliteData.message}</p>
      {satelliteData.alerts && satelliteData.alerts.length > 0 && (
        <div>
          <h3>Alerts:</h3>
          <ul>
            {satelliteData.alerts.map((alert, index) => (
              <li key={index}>{alert}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SatelliteEnvironmentStatus;
