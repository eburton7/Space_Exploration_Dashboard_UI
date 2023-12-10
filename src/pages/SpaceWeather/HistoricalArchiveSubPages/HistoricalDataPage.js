import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import './HistoricalDataPage.css';
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
          `http://localhost:3000/api/space-weather/solar-flares`
        );
        setFlares(response.data);
      } catch (error) {
        console.error('Error fetching solar flare data:', error);
      }
    };

    fetchData();
  }, []);

  // Prepare data for the chart
  const dataByMonth = {}; // Object to store the count of solar flares per month
  const dataByYear = {}; // Object to store the count of solar flares per year

  flares.forEach((flare) => {
    const year = moment(flare.beginTime).year();
    const month = moment(flare.beginTime).format('MMMM');
    
    if (year.toString() === selectedYear || selectedYear === 'All History') {
      if (!dataByMonth[month]) {
        dataByMonth[month] = 1;
      } else {
        dataByMonth[month]++;
      }
      
      if (!dataByYear[year]) {
        dataByYear[year] = 1;
      } else {
        dataByYear[year]++;
      }
    }
  });

  const chartData = {
    labels: selectedYear === 'All History' ? Object.keys(dataByYear) : Object.keys(dataByMonth),
    datasets: [
      {
        label: `Solar Flares in ${selectedYear}`,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: selectedYear === 'All History' ? Object.values(dataByYear) : Object.values(dataByMonth),
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
          color: '#FFFFFF', // Text color for the Y-axis title
        },
        ticks: {
          color: '#FFFFFF', // Text color for the Y-axis ticks
        }
      },
      x: {
        ticks: {
          color: '#FFFFFF', // Text color for the X-axis ticks
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#FFFFFF', // Text color for legend labels
        }
      },
    }
  };

  return (
    <div className="solar-flare-chart">
      <h2>
        {selectedYear === 'All History'
          ? 'Solar Flares per Year (All History)'
          : `Solar Flares per Month (${selectedYear})`}
      </h2>
      {/* Bar chart */}
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

const HistoricalDataPage = () => {
  // State for the selected year in the timeline
  const [selectedYear, setSelectedYear] = useState('All History');

  return (
    <div className="historical-data-page">
      <SolarFlareChart selectedYear={selectedYear} />
      {/* Interactive Timeline */}
      <h2 className="timeline-heading">Filter by Year</h2>
      <div className="timeline-container">
        <button
          onClick={() => setSelectedYear('All History')}
          className={`timeline-year ${
            selectedYear === 'All History' ? 'selected' : ''
          }`}
        >
          All History
        </button>
        {Array.from({ length: new Date().getFullYear() - 2009 }, (_, index) => (
          <button
            key={index + 2010}
            onClick={() => setSelectedYear((index + 2010).toString())}
            className={`timeline-year ${
              (index + 2010).toString() === selectedYear ? 'selected' : ''
            }`}
          >
            {(index + 2010).toString()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HistoricalDataPage;
