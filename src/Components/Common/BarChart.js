import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";


function BarChart() {

    const labels = ["January", "February", "March", "April", "May", "June"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    };
    
    return (

      <div className="card h-100">
        <div className="card-header">
          <span className="me-2"><i className="bi bi-bar-chart-fill"></i></span>
            Bar Chart
        </div>
        <div className="card-body">
          <Bar data={data} />
          {/* <canvas className="chart" width="400" height="200"></canvas> */}
        </div>
      </div>

    )
}

export default BarChart;