import React, { useState, useEffect } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const App = () => {
  const [financialData, setFinancialData] = useState(null);

  useEffect(() => {
    // Fake JSON data
    const fakeData = {
      combined: [
        { date: '2023-08-01', value: 120, label: 'A' },
        { date: '2023-08-02', value: 135, label: 'B' },
        { date: '2023-08-03', value: 150, label: 'C' },
        { date: '2023-08-04', value: 160, label: 'D' },
        { date: '2023-08-05', value: 170, label: 'E' },
      ],
    };
    setFinancialData(fakeData);
  }, []);

  if (!financialData) return <div>Loading...</div>;

  const lineData = {
    labels: financialData.combined.map(data => data.date),
    datasets: [
      {
        label: 'Financial Data Line Chart',
        data: financialData.combined.map(data => data.value),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const barData = {
    labels: financialData.combined.map(data => data.date),
    datasets: [
      {
        label: 'Financial Data Bar Chart',
        data: financialData.combined.map(data => data.value),
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: financialData.combined.map(data => data.label),
    datasets: [
      {
        label: 'Financial Data Pie Chart',
        data: financialData.combined.map(data => data.value),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
      },
    ],
  };

  return (
    <div>
      <h1>Financial Dashboard</h1>
      <div>
        <h2>Line Chart</h2>
        <Line data={lineData} />
      </div>
      <div>
        <h2>Bar Chart</h2>
        <Bar data={barData} />
      </div>
      <div>
        <h2>Pie Chart</h2>
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default App;
