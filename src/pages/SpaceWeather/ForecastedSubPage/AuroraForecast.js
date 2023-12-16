import React, { useState, useEffect } from 'react';
import './AuroraForecast.css';

const AuroraForecast = () => {
    const [fileContent, setFileContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/space-weather/forecast`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(text => {
      setFileContent(text);
      setLoading(false);
    })
    .catch(error => {
      setError('Failed to fetch file: ' + error.message);
      setLoading(false);
    });
}, []);


if (loading) {
  return <div className="aurora-forecast loading">Loading...</div>;
}

if (error) {
  return <div className="aurora-forecast error">Error: {error}</div>;
}

return (
  <div className="aurora-forecast">
    <pre>{fileContent}</pre>
  </div>
);
}

export default AuroraForecast;
