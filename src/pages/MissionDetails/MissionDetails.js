import React, { useState } from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import './MissionDetails.css';
import 'leaflet/dist/leaflet.css'; 
// Import the images
import RocketImage from '../../assets/rocketship.png';
// Import the satellite map component
import SatelliteMap from './SatelliteMap';


const MissionDetails = () => {
  const [selectedSatelliteId, setSelectedSatelliteId] = useState('');
  const [satellites, setSatellites] = useState([]); // List of satellites
  const [selectedSatellite, setSelectedSatellite] = useState(null); // Selected satellite
  
  const popularSatellites = [
    { id: '25544', name: 'ISS (ZARYA)' },
    { id: '40075', name: 'AISSAT 2' },
    { id: '42826', name: 'NORSAT 1' },
    { id: '28654', name: 'NOAA 18' },
    { id: '43786', name: 'ITASAT' },
    { id: '43809', name: 'CENTAURI-1' },
    { id: '42828', name: 'NORSAT 2' },
    { id: '33499', name: 'KKS-1 (KISEKI)' },
  ];

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

          </div>
        </div>
      </div>
      <div className="mission-elem-27">
          <div className="mission-elem-28">
            <div className="mission-elem-29">
              <span className="span-space-adventures">
                We Make Space Exploration Tangible
              </span>
            </div>
           </div>
        </div>
        <div className="style-mission-elem-30">
        <div className="mission-update-elem-1 real-time-mission">
          <div className="mission-text-content">
            <h2>Real-Time Mission Updates</h2>
            <p>Stay updated in real time with the status of various missions, including their launch dates, objectives, and related updates.</p>
          </div>
          <div className="mission-image-content">
          <img src={RocketImage} alt="Rocket Launch" />
          </div>
        </div>
      </div>
      <div className="style-mission-elem-30">
        <div className="real-time-map">
        <h2>Real-Time Satellite Tracking</h2>
        <p>Enter a satellite ID to track its current position.</p>
        <div className="satellite-grid">
  {popularSatellites.map((satellite, index) => (
    <div key={index} className="satellite-item" onClick={() => setSelectedSatellite(satellite.id)}>
      {satellite.name}
    </div>
  ))}
</div>
        <input type="text" placeholder="Enter Satellite ID" onChange={handleSatelliteIdChange} />
        <SatelliteMap satelliteId={selectedSatellite} />

      </div>
      </div>
      <Footer />
    </div>
  );
};

export default MissionDetails;