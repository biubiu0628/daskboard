import React from "react";
import Chart from "react-apexcharts";

const AreaChart = () => {
  const options = {
    chart: {
      id: "column-chart",
      toolbar: { show: false },
    },
    xaxis: {
      tickPlacement: "on",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisTicks: { show: false },
      labels: {
        offsetY: 6,
        style: {
          colors: "#ffffff",
          fontSize: 12,
          fontWeight: "bold",
          fontFamily: "Helvetica",
        },
      },
      axisBorder: { show: false },
    },
    yaxis: {
      min: 0,
      max: 500,
      tickAmount: 5,
      labels: {
        offsetX: -10,
        style: {
          colors: "#ffffff",
          fontSize: 12,
          fontWeight: "bold",
          fontFamily: "Helvetica",
        },
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    legend: { show: false },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.54,
        opacityTo: 0.0,
        stops: [0, 100],
      },
    },
    grid: {
      show: true,
      borderColor: "#4A5568",
      strokeDashArray: 4,
    },
    colors: ["#ffffff", "#3182CE"],
  };

  const series = [
    {
      name: "Series1",
      data: [180, 220, 200, 360, 350, 480, 370, 300, 350, 220, 380, 430],
    },
    {
      name: "Series2",
      data: [500, 180, 160, 270, 200, 250, 220, 200, 100, 150, 170, 120],
    },
  ];

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type="area"
            width="1050"
            height="350"
          />
        </div>
      </div>
    </div>
  );
};

export default AreaChart;
