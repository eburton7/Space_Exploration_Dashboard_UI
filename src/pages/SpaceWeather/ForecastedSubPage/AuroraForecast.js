import React from 'react';
import './AuroraForecast.css';

const AuroraForecast = () => {
  // Placeholder for actual aurora forecast data
  const auroraData = {
    intensity: "Moderate",
    visibilityNorth: "Visible up to 60° N latitude",
    visibilitySouth: "Visible up to 60° S latitude"
  };

  return (
    <div className="aurora-forecast">
      <h2>Aurora Forecast</h2>
      <p>Intensity: {auroraData.intensity}</p>
      <p>{auroraData.visibilityNorth}</p>
      <p>{auroraData.visibilitySouth}</p>
      {/* Placeholder for the map */}
      <div className="aurora-map">
        {/* Implement map visualization here */}
        <p>Map showing aurora intensity and reach (To be implemented)</p>
      </div>
    </div>
  );
};

export default AuroraForecast;
