import React from "react";
import Chart from "react-apexcharts";

const ColumnChart = () => {
  const options = {
    chart: {
      id: "column-chart",
    },
    xaxis: {
      categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    yaxis: {
      min: 0,
      max: 30,
      tickAmount: 3,
      colorText: "A0AEC0",
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
