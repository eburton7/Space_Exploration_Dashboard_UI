import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'; 
import './SpaceWeather.css'; 
import northernLightsImage from '../../assets/northernlights.png';
import InteractiveSpaceMap from './SpaceWeatherSubPages/InteractiveSpaceMap';
import LiveDataFeed from './SpaceWeatherSubPages/LiveDataFeed';
import SpaceWeatherAlerts from './SpaceWeatherSubPages/SpaceWeatherAlerts';
import SatelliteEnvironmentStatus from './SpaceWeatherSubPages/SatelliteEnvironmentStatus';
import HistoricalDataPage from './HistoricalArchiveSubPages/HistoricalDataPage';
import AuroraForecast from './ForecastedSubPage/AuroraForecast';
import SpaceWeatherResources from './WeatherResourcesSubPage/SpaceWeatherResources';
import './SpaceWeatherSubPages/InteractiveSpaceMap.css';
import './SpaceWeatherSubPages/LiveDataFeed.css';
import './SpaceWeatherSubPages/SpaceWeatherAlerts.css';
import './SpaceWeatherSubPages/SatelliteEnvironmentStatus.css';
import './HistoricalArchiveSubPages/HistoricalDataPage.css';
import './ForecastedSubPage/AuroraForecast.css';
import './WeatherResourcesSubPage/SpaceWeatherResources';

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
      <section className="services-section">
            <h2>Services</h2>
            <div className="services-list">
              <NavLink to="/login" className="service tile">
                <h3>Real-Time Alerts</h3>
                <p>Get instant alerts for space weather events directly to your email.</p>
              </NavLink>
              <div className="service tile" onClick={() => scrollToRef(currentWeatherRef)}>
                <h3>Satellite Data Access</h3>
                <p>Access real-time satellite data to monitor space weather conditions.</p>
              </div>
              <div className="service tile" onClick={() => scrollToRef(resourcesRef)}>
                <h3>Educational Resources</h3>
                <p>Learn about space weather with our comprehensive educational resources.</p>
              </div>
              <div className="service tile" onClick={() => scrollToRef(archiveWeatherRef)}>
            <h3>Archived Weather Data</h3>
            <p>Explore comprehensive historical data on space weather conditions.</p>
          </div>
          <div className="service tile" onClick={() => scrollToRef(upcomingEventsRef)}>
            <h3>Forecasted Space Weather</h3>
            <p>Gain insights into future space weather patterns with our advanced forecasting tools.</p>
          </div>
            </div>
          </section>
      <section ref={currentWeatherRef} className="current-weather-section">
        <h2>Current Space Weather</h2>
        {/* Space Weather Alerts Banner */}
      <section className="space-weather-alerts-section">
        <SpaceWeatherAlerts />
      </section>
        {/* Interactive Space Map Section */}
      <section className="interactive-map-section">
        <h2>Interactive Space Map</h2>
        <InteractiveSpaceMap />
      </section>
      {/* Live Data Feed Section */}
      <section className="live-data-feed-section">
        <h2>Live Space Weather Data</h2>
        <LiveDataFeed />
      </section>
      {/* Satellite Environment Status Section */}
      <section className="satellite-environment-section">
        <h2>Satellite Environment and Activity Update</h2>
        <SatelliteEnvironmentStatus />
      </section>
      </section> 
      <section ref={archiveWeatherRef} className="archive-weather-section">
        <h2>Archived Weather Data</h2>
       {/* Satellite Environment Status Section */}
      <section className="archive-subpage-section">
        <h2>Historical Data</h2>
        <HistoricalDataPage />
      </section>
      </section>
      <section ref={upcomingEventsRef} className="upcoming-events-section">
        <h2>Forecasted Space Weather</h2>
      <section className="forecasted-space-section">
        <h2>Forecasted Space Weather Page</h2>
        <AuroraForecast />
      </section>
      </section>
      <section ref={resourcesRef} className="resources-section">
        <h2>Space Weather Resources</h2>
        <SpaceWeatherResources />
      </section> 
       
      <Footer />
    </div>
  );
};
export default SpaceWeather;
