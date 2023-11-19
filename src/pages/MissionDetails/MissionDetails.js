import React from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import './MissionDetails.css';

const MissionDetails = ({ mission }) => {
  // Placeholder for mission data
  const missionData = mission || {
    title: 'Mars Rover Mission',
    image: 'path_to_mars_rover_image.jpg',
    description: 'A detailed description of the Mars Rover Mission...',
    launchDate: '2021-07-30',
    // more mission details...
  };

  return (
    <div>
      <Header />
      <div className="mission-details">
        <h1>{missionData.title}</h1>
        <img src={missionData.image} alt={missionData.title} />
        <p>{missionData.description}</p>
        <p>Launch Date: {missionData.launchDate}</p>
        {/* More details to be added here */}
      </div>
      <Footer />
    </div>
  );
};

export default MissionDetails;
