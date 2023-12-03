import React, { useState } from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import './MissionDetails.css';
import 'leaflet/dist/leaflet.css'; 

// Import the images
import starynightImage from '../../assets/starynight.png';
import darkmoonImage from '../../assets/darkmoon.png';
import RocketImage from '../../assets/rocketship.png';
// Import the satellite map component
import SatelliteMap from './SatelliteMap';

export const SpaceMissionCard = ({ image, title, description }) => {
  return (
    <div className="mission-elem-26">
      <img src={image} alt={title} className="mission-image" />
      <div className="mission-content">
        <h2 className="mission-elem-31">{title}</h2>
        <p className="mission-elem-30">{description}</p>
        <button className="mission-button">{title === "Unfolding Orion's Journey" ? "Read More" : "Discover More"}</button>
      </div>
    </div>
  );
};

const MissionDetails = () => {
  const [selectedSatelliteId, setSelectedSatelliteId] = useState('');

  const handleSatelliteIdChange = (event) => {
    setSelectedSatelliteId(event.target.value);
  };


  return (
    <div>
      <Header />
      <div className="style-mission-elem-1">
        <div className="mission-elem-19">
          <div className="mission-elem-20">
            <div className="mission-elem-21">
              <span className="mission-elem-22">
                Embark on Space Adventures with Us!
              </span>
            </div>
            <div className="container mission-elem-26"> </div>
          </div>
        </div> 
        <div className="mission-elem-27">
          <div className="mission-elem-28">
            <div className="mission-elem-29">
              <span className="mission-elem-31">
                Our Mission Updates Unveiled
              </span>
              <span className="mission-elem-30">
                Get the latest news on ongoing space missions, insightful details about objectives, schedules, and never miss any crucial space updates.
              </span>
            </div>
          </div>
        </div> 
      </div> 
      <div className="style-mission-elem-30">
        <div className="mission-update-elem-1">
          <div className="mission-update-elem-2">
          <img src={starynightImage} alt="Unfolding Orion's Journey" />
            <div>
              <h2>Unfolding Orion's Journey</h2>
              <p>Stay updated with the real-time status of the Orion's mission, learn about its objectives and witnessed its progress up close.</p>
              <button className="mission-button">Read More</button>
            </div>
          </div>
          <div className="mission-update-elem-3">
          <img src={darkmoonImage} alt="Exploring Mars' Silent Echoes" />
            <div>
              <h2>Exploring Mars' Silent Echoes</h2>
              <p>Acquaint yourself with the majestic realm of Mars. Follow our mission as we uncover the secrets of the Red Planet.</p>
              <button className="mission-button">Discover More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mission-elem-27">
          <div className="mission-elem-28">
            <div className="mission-elem-29">
              <span className="span-space-adventures">
                We Make Space Explorations Tangible
              </span>
            </div>
           </div>
        </div>
        <div className="style-mission-elem-30">
        <div className="mission-update-elem-1 real-time-mission">
          {/* Text Section */}
          <div className="mission-text-content">
            <h2>Real-Time Mission Updates</h2>
            <p>Stay updated in real time with the status of various missions, including their launch dates, objectives, and related updates.</p>
          </div>
          
          {/* Image Section */}
          <div className="mission-image-content">
          <img src={RocketImage} alt="Rocket Launch" />
          </div>
        </div>
      </div>
            <div className="mission-services-section">
        <div className="mission-service">
          <h3>Mission Search</h3>
          <p>Search for specific missions, follow them and get personalized updates.</p>
        </div>
        <div className="mission-service">
          <h3>Space Biology</h3>
          <p>Learn about the biological experimentations performed during our space missions.</p>
        </div>
        <div className="mission-service">
          <h3>Astrophotography</h3>
          <p>Discover the universe through awe-inspiring astrophotography.</p>
        </div>
        <div className="mission-service">
          <h3>Spacecraft Details</h3>
          <p>Learn about our advanced spacecrafts and their special technical features.</p>
        </div>
        <div className="mission-service">
          <h3>Space Telescope</h3>
          <p>Explore distant galaxies using our powerful space telescopes.</p>
        </div>
        <div className="mission-service">
          <h3>Space Weather Updates</h3>
          <p>Get updated about the space weather, immensely helping astronomers and space travelers.</p>
        </div>
        <div className="mission-service">
          <h3>Mission Objectives</h3>
          <p>Get detailed insights into the objectives and expected findings of each mission.</p>
        </div>
        <div className="mission-service">
          <h3>Microgravity Studies</h3>
          <p>Understand more about ongoing microgravity research and microgravity's effects.</p>
        </div>
        <div className="mission-service">
          <h3>Training Programme</h3>
          <p>Understand how astronauts are prepared for the rigors of space missions.</p>
        </div>
        <div className="real-time-map">
        <h3>Real-Time Satellite Tracking</h3>
        <p>Enter a satellite ID to track its current position.</p>
        <input type="text" placeholder="Enter Satellite ID" onChange={handleSatelliteIdChange} />
        <SatelliteMap satelliteId={selectedSatelliteId} />
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default MissionDetails;