import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header-elem-1">
      <div className="header-elem-2">
        <div className="header-elem-3">
          <span className="header-elem-4">
            <a href="/" className="link" target="_self">
              Space Exploration Dashboard
            </a>
          </span>
        </div>
        <div className="header-elem-5">
          <div className="header-elem-6">
            <span className="header-elem-7">
              <NavLink to="/missiondetails" className="link">
                Missions
              </NavLink>
            </span>
            <span className="header-elem-8">
              <NavLink to="/spaceeventscalendar" className="link">
                Events
              </NavLink>
            </span>
            <span className="header-elem-9">
              <NavLink to="/spaceweather" className="link">
                Weather
              </NavLink>
            </span>
          </div>
        </div>
        <div className="header-elem-10">
          <button className="header-elem-11">Explore Now</button>
        </div>
        <div className="header-elem-12"></div>
      </div>
    </header>
  );
}

export default Header;
