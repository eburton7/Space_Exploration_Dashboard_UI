import React from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import './SpaceWeather.css';

const SpaceWeather = ({ weatherData }) => {
  // Placeholder for space weather data
  const weatherInfo = weatherData || {
    solarWind: '500 km/s',
    geomagneticStorms: 'G1 (Minor)',
    solarFlares: 'M-Class',
    // more weather info...
  };

  return (
    <div>
      <Header />
      <div className="space-weather">
        <h1>Space Weather</h1>
        <p>Solar Wind: {weatherInfo.solarWind}</p>
        <p>Geomagnetic Storms: {weatherInfo.geomagneticStorms}</p>
        <p>Solar Flares: {weatherInfo.solarFlares}</p>
        {/* More space weather details to be added here */}
      </div>
      <Footer />
    </div>
  );
};

export default SpaceWeather;
