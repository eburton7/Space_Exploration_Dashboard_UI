import React from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import './SpaceEventsCalendar.css';

const SpaceEventsCalendar = ({ events }) => {
  // Placeholder for events data
  const spaceEvents = events || [
    { id: 1, title: 'Meteor Shower', date: '2023-08-12' },
    { id: 2, title: 'Lunar Eclipse', date: '2023-09-18' },
    // more events...
  ];

  return (
    <div>
      <Header />
      <div className="space-events-calendar">
        <h1>Space Events Calendar</h1>
        <ul>
          {spaceEvents.map(event => (
            <li key={event.id}>{event.title} - {event.date}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default SpaceEventsCalendar;
