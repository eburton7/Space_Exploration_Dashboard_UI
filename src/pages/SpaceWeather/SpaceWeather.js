import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'; 
import './SpaceWeather.css'; 
import northernLightsImage from '../../assets/northernlights.png';
import HistoricalDataPage from './HistoricalArchiveSubPages/HistoricalDataPage';
import AuroraForecast from './ForecastedSubPage/AuroraForecast';
import SpaceWeatherResources from './WeatherResourcesSubPage/SpaceWeatherResources';
import GeomagneticStorm from './GeomagneticStormSubPage/GeomagneticStorm';
import ElectronFluxAlert from './Alerts/Alerts';
import './HistoricalArchiveSubPages/HistoricalDataPage.css';
import './ForecastedSubPage/AuroraForecast.css';
import './WeatherResourcesSubPage/SpaceWeatherResources.css';

const SpaceWeather = () => {
  const currentWeatherRef = useRef(null);
  const resourcesRef = useRef(null);
  const aboutusRef = useRef(null);
  const archiveWeatherRef = useRef(null);
  const upcomingEventsRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="dashboard-container">
      <Header />
      <section className="hero-section">
        <div className="hero-content">
          <h1>Discover the Latest Space Weather</h1>
          <p>Stay informed with real-time space weather updates and access valuable resources.</p>
          <button onClick={() => scrollToRef(aboutusRef)} className="explore-now-btn">Explore Now</button>
        </div>
      </section> 
      <section className="about-us-section">
        <div className="about-us-image">
          <img src={northernLightsImage} alt="Northern lights" />
        </div>
        <div ref={aboutusRef} className="about-us-content">
          <h2>About us</h2>
          <p>Welcome to Space Exploration Dashboard, your go-to online platform for space weather information. We are dedicated to providing you with real-time updates and accurate data to help you navigate the ever-changing conditions of outer space.</p>
          <p>Our team of experts is passionate about space exploration and is committed to delivering the most reliable and comprehensive space weather dashboard available. Whether you are an astronaut, a scientist, or simply an enthusiast, our goal is to equip you with the knowledge you need to make informed decisions and explore the wonders of the universe safely.</p>
        </div>
      </section>
      <section ref={currentWeatherRef} className="current-weather-section">
        <h2>Current Space Weather Alerts</h2>
        {/* Space Weather Alerts Banner */}
      <section className="weather-alerts-section">
        <ElectronFluxAlert/>
      </section>
      </section> 
      <section ref={archiveWeatherRef} className="archive-weather-section">
        <h2>Historical Space Weather Data</h2>
       {/* Satellite Environment Status Section */}
      <section className="archive-subpage-section">
        <HistoricalDataPage />
      </section>
      </section>
      <section ref={upcomingEventsRef} className="upcoming-events-section">
        <h2>Forecasted Space Weather</h2>
      <section className="forecasted-space-section">
        <AuroraForecast />
      </section>
      </section>
      <section ref={resourcesRef} className="resources-section">
        <h2>Space Weather FAQ</h2>
        <SpaceWeatherResources />
      </section> 
      <section className="geomagnetic-storm-section">
          <h2>Geomagnetic Storm Timeline</h2>
          <GeomagneticStorm />
      </section>
      <Footer />
    </div>
  );
};
export default SpaceWeather;
