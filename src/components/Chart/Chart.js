import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // all data points are already filtered, from the same year
  const dataPointsValue = props.dataPoints.map(function (dataPoint) {
    return dataPoint.value;
  });

  const totalMax = Math.max(...dataPointsValue);

  return (
    <div className="chart">
      {props.dataPoints.map(function (dataPoint) {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
