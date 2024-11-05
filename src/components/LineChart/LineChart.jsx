import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Price"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Price"]];
    if (historicalData.prices) {
      historicalData.prices.map((item) => {
        dataCopy.push([new Date(item[0]).toLocaleDateString(), item[1]]);
      });
      setData(dataCopy); //
    }
  }, [historicalData]);

  return (
    <Chart
      chartType="LineChart"
      data={data}
      options={{
        title: "Price Over Time",
        hAxis: { title: "Date" },
        vAxis: { title: "Price" },
        legend: "none",
      }}
      width="100%"
      height="400px"
    />
  );
};

export default LineChart;
