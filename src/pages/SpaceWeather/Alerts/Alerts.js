import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Alerts.css'; 

const ElectronFluxAlert = () => {
    const [alertData, setAlertData] = useState([]);

    useEffect(() => {
        const fetchAlertData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/space-weather/electron-flux-alerts`);
                setAlertData(response.data);
            } catch (error) {
                console.error('Error fetching electron flux alert data:', error);
            }
        };

        fetchAlertData();
    }, []);

    return (
        <div className="electron-flux-alert">
            {alertData.length > 0 ? (
                alertData.map((alert, index) => (
                    <div key={index} className="alert alert-danger" role="alert">
                        <pre style={{ whiteSpace: 'pre-wrap' }}>{alert}</pre>
                    </div>
                ))
            ) : (
                <div className="alert alert-secondary" role="alert">
                    <p>No electron flux alerts currently available.</p>
                </div>
            )}
        </div>
    );
};

export default ElectronFluxAlert;