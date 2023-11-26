import React, { useState } from 'react';
import './SpaceWeatherAlerts.css'; 

// Mock data for space weather alerts
const mockAlerts = [
  {
    title: 'Solar Flare Alert',
    description: 'A significant solar flare was detected near the eastern limb of the sun.',
    level: 'High'
  },
  {
    title: 'Geomagnetic Storm Warning',
    description: 'A G2 (Moderate) geomagnetic storm is expected to hit Earth within the next 24 hours.',
    level: 'Moderate'
  },
  {
    title: 'Increased Solar Wind',
    description: 'Elevated solar wind speeds detected, possible auroral activity expected.',
    level: 'Low'
  }
];

const SpaceWeatherAlerts = () => {
  // Initialize state with mock data
  const [alerts, setAlerts] = useState(mockAlerts);

  // Future API fetch would go here
  // useEffect(() => { ... }, []);

  return (
    <div className="alerts-container">
      <h2>Space Weather Alerts and Warnings</h2>
      {alerts.length > 0 ? (
        <ul>
          {alerts.map((alert, index) => (
            <li key={index}>
              <strong>{alert.title}</strong> - {alert.description} (Level: {alert.level})
            </li>
          ))}
        </ul>
      ) : (
        <p>No current alerts or warnings.</p>
      )}
    </div>
  );
};

export default SpaceWeatherAlerts;
