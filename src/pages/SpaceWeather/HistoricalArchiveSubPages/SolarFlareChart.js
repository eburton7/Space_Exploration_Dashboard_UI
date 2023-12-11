// SolarFlareChart.js

import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import moment from 'moment';
import axios from 'axios';
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

const SolarFlareChart = ({ selectedYear }) => {
  const [flares, setFlares] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/space-weather/solar-flares`
        );
        setFlares(response.data);
      } catch (error) {
        console.error('Error fetching solar flare data:', error);
      }
    };

    fetchData();
  }, []);

  // Filter solar flares by selected year
  const filteredFlares = flares.filter((flare) => {
    const year = moment(flare.beginTime).year();
    return year.toString() === selectedYear;
  });

  // Count solar flares by month within the selected year
  const months = {}; // Object to store the count of solar flares per month

  filteredFlares.forEach((flare) => {
    const month = moment(flare.beginTime).format('MMM');
    if (months[month]) {
      months[month]++;
    } else {
      months[month] = 1;
    }
  });

  // Prepare data for the chart
  const chartData = {
    labels: Object.keys(months),
    datasets: [
      {
        label: 'Solar Flares per Month',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: Object.values(months),
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Count',
        },
      },
    },
  };

  return (
    <div className="solar-flare-chart">
      <h2>Solar Flares per Month in {selectedYear}</h2>
      {/* Bar chart */}
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default SolarFlareChart;
