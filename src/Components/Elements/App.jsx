import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Private Sale", 11],
  ["Initial Liquidity", 2],
  ["Protocol Mining Reward", 2],
  ["Presale", 2],
  ["Team and Advisor", 7], // CSS-style declaration
];

export const options = {
  
  pieHole: 0.5,
  is3D: false,
  backgroundColor:"transparent",
  
};

export function App() {
  return (
    <Chart
    
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}