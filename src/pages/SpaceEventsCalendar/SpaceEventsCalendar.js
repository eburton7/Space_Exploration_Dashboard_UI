import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer.js';
import './SpaceEventsCalendar.css';

const categories = [
  { id: "drought", title: "Drought" },
  { id: "dustHaze", title: "Dust and Haze" },
  { id: "earthquakes", title: "Earthquakes" },
  { id: "floods", title: "Floods" },
  { id: "landslides", title: "Landslides" },
  { id: "manmade", title: "Manmade" },
  { id: "seaLakeIce", title: "Sea and Lake Ice" },
  { id: "severeStorms", title: "Severe Storms" },
  { id: "snow", title: "Snow" },
  { id: "tempExtremes", title: "Temperature Extremes" },
  { id: "volcanoes", title: "Volcanoes" },
  { id: "waterColor", title: "Water Color" },
  { id: "wildfires", title: "Wildfires" }
];

const SpaceEventsFilter = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('open');
    const [limit, setLimit] = useState(10);
    const [days, setDays] = useState('');

    useEffect(() => {
        setLoading(true);
        const fetchEvents = async () => {
            try {
                const params = {
                    category,
                    status: status !== '' ? status : undefined,
                    limit: limit !== '' ? limit : undefined,
                    days: days !== '' ? days : undefined,
                };
                const response = await axios.get('http://localhost:3000/api/space-weather/eonet-events', { params });
                setEvents(response.data);
                setError('');
            } catch (err) {
                setError('Failed to load events');
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, [category, status, limit, days ]);

    // Event handler functions for each filter
    const handleCategoryChange = e => setCategory(e.target.value);
    const handleStatusChange = e => setStatus(e.target.value);
    const handleLimitChange = e => setLimit(e.target.value);
    const handleDaysChange = e => setDays(e.target.value);

// Utility function to parse and formate the date
const formatDate = (dateString) => {
  const options = {
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit', 
      timeZone: 'UTC', // Set the timezone to UTC
      hour12: true // Use 12-hour format
  };
  return new Date(dateString).toLocaleString('en-US', options); // Use en-US locale for consistent formatting
};

    return (
        <div className="space-events-filter">
            <Header />
            {/* Filter UI elements */}
            <label>Category: </label>
            <select value={category} onChange={handleCategoryChange}>
                <option value="">All Categories</option>
                {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.title}</option>
                ))}
            </select>

            <label>Status: </label>
            <select value={status} onChange={handleStatusChange}>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
                <option value="">All</option>
            </select>

            <label>Limit: </label>
            <input type="number" value={limit} onChange={handleLimitChange} />

            <label>Days: </label>
            <input type="number" value={days} onChange={handleDaysChange} />

            <p className="utc-note">All times are displayed in Coordinated Universal Time (UTC).</p>
            {loading ? <p>Loading events...</p> : null}
            {error ? <p>{error}</p> : null}
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Date (UTC)</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event => (
                         <tr key={event.id}>
                         <td>{event.title}</td>
                         <td>{event.geometry.map(geo => <div key={geo.date}>{formatDate(geo.date)}</div>)}</td>
                     </tr>
                    ))}
                </tbody>
            </table>
            <Footer />
        </div>
    );
};

export default SpaceEventsFilter;
