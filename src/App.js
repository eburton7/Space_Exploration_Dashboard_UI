import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.js';
import MissionDetails from './pages/MissionDetails/MissionDetails.js';
import SpaceWeather from './pages/SpaceWeather/SpaceWeather.js';
import SpaceEventsCalendar from './pages/SpaceEventsCalendar/SpaceEventsCalendar.js';
import AboutUs from './pages/AboutUs/AboutUs';
import ResourcesPage from './pages/Resources/Resources';

import './App.css';


function App() {
  // Mock user data for testing
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    role: 'Admin',
    isAuthenticated: true,
  });

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/MissionDetails" element={<MissionDetails />} />
          <Route path="/SpaceWeather" element={<SpaceWeather />} />
          <Route path="/SpaceEventsCalendar" element={<SpaceEventsCalendar />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
