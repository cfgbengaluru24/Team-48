import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const AttendanceCharts = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/attendance')
      .then(response => response.json())
      .then(data => {
        setAttendanceData(data);
      })
      .catch(error => console.error('Error fetching attendance data:', error));
  }, []);

  const processDataForLineChart = (data) => {
    const students = {};
    data.forEach(record => {
      if (!students[record.studentId]) {
        students[record.studentId] = { dates: [], attendance: [] };
      }
      students[record.studentId].dates.push(new Date(record.date).toLocaleDateString());
      students[record.studentId].attendance.push(record.status ? 1 : 0);
    });

    const labels = Object.keys(students).length > 0 ? students[Object.keys(students)[0]].dates : [];

    const datasets = Object.keys(students).map(studentId => ({
      label: `Student ${studentId}`,
      data: students[studentId].attendance,
      borderColor: `hsl(${studentId * 36}, 100%, 50%)`,
      fill: false,
    }));

    return { labels, datasets };
  };

  const processDataForBarChart = (data) => {
    const students = {};
    data.forEach(record => {
      if (!students[record.studentId]) {
        students[record.studentId] = { present: 0, total: 0 };
      }
      students[record.studentId].total += 1;
      if (record.status) {
        students[record.studentId].present += 1;
      }
    });

    const labels = Object.keys(students).map(studentId => `Student ${studentId}`);
    const attendanceRates = Object.keys(students).map(studentId => (students[studentId].present / students[studentId].total) * 100);

    return {
      labels,
      datasets: [
        {
          label: 'Attendance Rate',
          data: attendanceRates,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
      ],
    };
  };

  const barChartData = processDataForBarChart(attendanceData);
  const lineChartData = processDataForLineChart(attendanceData);

  return (
    <div>
      <h2>Attendance Rates</h2>
      {barChartData.labels.length > 0 ? (
        <Bar data={barChartData} options={{ scales: { y: { beginAtZero: true, max: 100 } } }} />
      ) : (
        <p>No data available for bar chart.</p>
      )}
      <h2>Attendance Trends</h2>
      {lineChartData.labels.length > 0 ? (
        <Line data={lineChartData} options={{ scales: { y: { beginAtZero: true, max: 1 } } }} />
      ) : (
        <p>No data available for line chart.</p>
      )}
    </div>
  );
};

export default AttendanceCharts;
