import React from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import './HomePage.css';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="header-image-container">
      <NavLink to="/MissionDetails" className="side-section left">Mission Details</NavLink>
        <div className="welcome-message">Welcome to the Space Exploration Dashboard</div>
        <div className="header-image"></div> {/* Background set via CSS */}
        <NavLink to="/SpaceWeather" className="side-section right">Space Weather</NavLink>
      </div>
      <div className="separator"></div>
      <div className="planets-and-cards-container">
     {/* Example Information Card */}
     <div className="info-card">
          <h2 className="info-card-title">Space Weather</h2>
          <p className="info-card-content">Latest solar wind data...</p>
        </div>

        {/* Can add more cards as needed */}
        <div className="info-card">
          <h2 className="info-card-title">Mission Details</h2>
          <p className="info-card-content">Details about ongoing missions...</p>
        </div>

        <div className="info-card">
          <h2 className="info-card-title">Satellite Data</h2>
          <p className="info-card-content">Information from our satellites...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;