import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import './HistoricalDataPage.css'; 

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Mock data for the graphs
const solarRadiationData = {
  labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
  datasets: [
    {
      label: 'Solar Radiation',
      data: [120, 115, 130, 140, 125, 135],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }
  ]
};

const geomagneticActivityData = {
  labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
  datasets: [
    {
      label: 'Geomagnetic Activity',
      data: [20, 25, 30, 35, 40, 45],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      borderColor: 'rgba(53, 162, 235, 1)',
      borderWidth: 1
    }
  ]
};

const HistoricalDataPage = () => {
  // State for the selected year in the timeline
  const [selectedYear, setSelectedYear] = useState('2021');

  return (
    <div className="historical-data-page">
      <h1>Historical Space Weather Data</h1>

      {/* Solar Radiation Graph */}
      <div className="chart-container">
        <h2>Solar Radiation Trends</h2>
        <Line data={solarRadiationData} />
      </div>

      {/* Geomagnetic Activity Graph */}
      <div className="chart-container">
        <h2>Geomagnetic Activity Trends</h2>
        <Bar data={geomagneticActivityData} />
      </div>

      {/* Interactive Timeline */}
      <div className="timeline-container">
        <h2>Interactive Timeline</h2>
        {["2016", "2017", "2018", "2019", "2020", "2021"].map(year => (
          <button key={year} onClick={() => setSelectedYear(year)} className={`timeline-year ${year === selectedYear ? 'selected' : ''}`}>
            {year}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HistoricalDataPage;
