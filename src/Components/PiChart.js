import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

function PiChart() {

    const data = {
        labels: ["Go", "Python", "Kotlin", "JavaScript", "R", "Swift"],
        datasets: [
          {
            label: "# of Votes",
            data: [35, 25, 22, 20, 18, 15],
            backgroundColor: [
              "#007D9C",
              "#244D70",
              "#D123B3",
              "#F7E018",
              "#fff",
              "#FE452A",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };
    
    return (


        <div className="card h-100">
            <div className="card-header">
                <span className="me-2"><i className="bi bi-bar-chart-fill"></i></span>
                    Pie Chart
            </div>
            <div className="card-body">
                <div style={{ "width": "100%", textAlign: "center" }}>
                    <h6 style={{ fontFamily: "monospace" }}>
                        Most Popular Programming languages to learn in 2022
                    </h6>
                    <Pie data={data} width={"50"} height={"50"} />
                </div>
            </div>
        </div>
    )
}

export default PiChart;