import React from "react";
import { Line, Bar } from "react-chartjs-2";

export default function VirtualMachine(props) {

console.log(props.vm.cpu);
const dateAndTime = props.vm.map((virtualMachine) => (
  virtualMachine.dateAndTime
))
const cpu = props.vm.map((virtualMachine) => (
  virtualMachine.cpu
))

const mem = props.vm.map((virtualMachine) => (
  virtualMachine.mem
))

const inProgresJobs = props.vm.map((virtualMachine) => (
  virtualMachine.inProgresJobs
))

const queuedJobs = props.vm.map((virtualMachine) => (
  virtualMachine.queuedJobs
))

    const dataCpu = {
        labels: dateAndTime,
        datasets: [
          {
            label: "CPU",
            data: cpu,
            fill: false,
            borderColor: "rgba(75,192,192,1)",
            writable: true
          }
        ]
      };

    var dataMemory = {
        labels: dateAndTime,
        datasets: [
          {
            label: "Memory",
            data: mem,
            fill: false,
            borderColor: "#742774"
          }
        ]

        
      };

  
    const dataJobs = {
            labels: dateAndTime[0],
            datasets: [
              {
                label: 'Jobs in Progress',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                stack: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: inProgresJobs[0]
              },
              {
                label: 'Queued Jobs',
                backgroundColor: 'rgba(155,231,91,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                stack: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: queuedJobs[0]
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
            <p>CPU: </p>
            <div><Line data={dataCpu}/></div>
        </div>
        <div className="memory">
            <p>Memory:</p>
            <div><Line data={dataMemory} /></div>
        </div>
        <div className="jobProgress">
            <p>Job in Progress and Queued Jobs:</p>
            <div>
            <Bar
                  data={dataJobs}
                  width={null}
                  height={null}
                  options={options}
            />
            </div>
            
        </div>
    </div>
    </div>
  );
}