import React from 'react';
import { Chart } from "react-google-charts";

const pieData = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

const options = {
  is3D: true,
  backgroundColor: "transparent",
  legend: { position: "bottom", textStyle: { color: "#fff" } },
  pieSliceText: "value",
  pieSliceBorderColor: "#fff",
  color:'darkblue'
};

const PieCharts = () => {
  return (
    <div className="pie-charts-container">
      {[1, 2, 3, 4].map((_, index) => (
        <div key={index} className="pie-chart-wrapper animate-float">
          <Chart
            chartType="PieChart"
            width="100%"
            height="300px"
            data={pieData}
            options={options}
          />
          <div className="chart-label">Chart {index + 1}</div>
        </div>
      ))}
    </div>
  );
};

export default PieCharts;
