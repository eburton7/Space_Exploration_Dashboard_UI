import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <nav className="main-nav">
          <NavLink to="/" exact className="nav-item" activeClassName="active">HOME</NavLink>
          <NavLink to="/SpaceWeather" className="nav-item" activeClassName="active">SPACE WEATHER</NavLink>
          <NavLink to="/SpaceEventsCalendar" className="nav-item" activeClassName="active">SPACE CALENDAR</NavLink>
          <NavLink to="/gallery" className="nav-item" activeClassName="active">GALLERY</NavLink>
          <NavLink to="/MissionDetails" className="nav-item" activeClassName="active">MISSIONS</NavLink>
          <NavLink to="/latest-research" className="nav-item" activeClassName="active">LATEST RESEARCH</NavLink>
          <NavLink to="/login" className="nav-item" activeClassName="active">LOGIN</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
