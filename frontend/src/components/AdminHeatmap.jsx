import React, { useState, useEffect } from 'react';
import Heatmap from 'heatmap.js';

const HeatmapComponent = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/attendance')
      .then(response => response.json())
      .then(data => {
        // Transform data for heatmap
        const transformedData = data.map(record => ({
          studentId: record.studentId,
          date: new Date(record.date),
          status: record.status ? 1 : 0,
          rating: record.rating,
        }));
        setAttendanceData(transformedData);
      })
      .catch(error => console.error('Error fetching attendance data:', error));
  }, []);

  useEffect(() => {
    if (attendanceData.length > 0) {
      const heatmapInstance = Heatmap.create({
        container: document.getElementById('heatmapContainer'),
        radius: 10,
      });

      const heatmapData = attendanceData.map(record => ({
        x: new Date(record.date).getDate(),
        y: record.studentId,
        value: record.status ? 1 : 0, // Use status as heatmap value
      }));

      heatmapInstance.setData({
        max: 1,
        data: heatmapData,
      });
    }
  }, [attendanceData]);

  return (
    <div id="heatmapContainer" style={{ width: '800px', height: '600px' }}></div>
  );
};

export default HeatmapComponent;
