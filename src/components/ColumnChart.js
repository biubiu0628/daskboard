import React, { useContext } from "react";
import Chart from "react-apexcharts";
import { DarkModeContext } from "./DarkModeContext";

const ColumnChart = () => {
  const { darkMode } = useContext(DarkModeContext);

  const options = {
    chart: {
      id: "column-chart",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      axisTicks: {
        show: false,
      },
      labels: {
        offsetY: 4,
        style: {
          colors: "#A0AEC0",
          fontSize: 12,
          fontWeight: "bold",
          fontFamily: "Helvetica",
        },
      },
      axisBorder: { show: false },
    },
    yaxis: {
      min: 0,
      max: 30,
      tickAmount: 3,
      labels: {
        style: {
          colors: "#A0AEC0",
          fontSize: 12,
          fontWeight: "bold",
          fontFamily: "Helvetica",
        },
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "11px",
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      borderColor: darkMode ? "#4A5568" : "#E2E8F0",
      strokeDashArray: 4,
    },
    colors: ["#ED8936"],
  };

  const series = [
    {
      name: "Values",
      data: [25, 20, 30, 22, 17, 29],
    },
  ];

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type="bar"
            width="447"
            height="345"
          />
        </div>
      </div>
    </div>
  );
};

export default ColumnChart;
