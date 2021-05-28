import React from "react";
import { Line, Bar, char} from "react-chartjs-2";

export default function VirtualMachine(props) {

    const dataCpu = {
        labels: ["Min1", "Min2", "Min3", "Min4", "Min5", "....Min60"],
        datasets: [
          {
            label: "CPU",
            data: [33, 53, 85, 41, 44, 65],
            fill: false,
            borderColor: "rgba(75,192,192,1)"
          },
        ]
      };

    const dataMemory = {
        labels: ["Min1", "Min2", "Min3", "Min4", "Min5", "....Min60"],
        datasets: [
          {
            label: "Memory",
            data: [props.vm.numberOfPages, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "#742774"
          }
        ]
      };

      const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                stack: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [65, 59, 80, 81, 56, 55, 40]
              },
              {
                label: 'My second dataset',
                backgroundColor: 'rgba(155,231,91,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                stack: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [45, 79, 10, 41, 16, 85, 20]
              }
            ]
        };

      const options={
        responsive: true,
        legend: {
            display: false,
        },
        type:'bar',
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }

  return (
    <div className="virtualMachine">
      <h3>Virtual Machine</h3>
      <h2>{props.vm.name}</h2>

      <div className="details">
        <div className="cpu">
            <p>CPU: {props.vm.authors[0]}</p>
            <div><Line data={dataCpu}/></div>
        </div>
        <div className="memory">
            <p>Memory: {props.vm.numberOfPages}</p>
            <div><Line data={dataMemory} /></div>
        </div>
        <div className="jobProgress">
            <p>Job in Progress: {props.vm.country}</p>
            <div>
            <Bar
                data={data}
                width={null}
                height={null}
                options={options}
            />
            </div>
            
        </div>

        <div className="queuedJobs">
            <p>Queued Jobs: {props.vm.released}</p>
            <div>
            <Bar
                data={data}
                width={null}
                height={null}
                options={options}
            />
            </div>
        </div>
    </div>

      {/* <div className="details">
        <p>👨: {props.vm.authors[0]}</p>
        <p>📖: {props.vm.numberOfPages} pages</p>
        <p>🏘️: {props.vm.country}</p>
        <p>⏰: {props.vm.released}</p>
  </div> */}
    </div>
  );
}