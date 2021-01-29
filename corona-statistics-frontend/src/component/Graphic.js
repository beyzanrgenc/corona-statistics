import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import ChartSection from './ChartSection';

const REST_API_URL_GET_ALL = 'http://localhost:8081/getStatistics';

class Graphic extends Component {

  constructor() {
    super();
    this.state = {
      chartData: {}
    }
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    
    axios.get(REST_API_URL_GET_ALL).then(res => {
      const statElement = res.data;
      let labels = [];
      let caseData = [];      
      let deathData = [];      
      let discharge = [];      
      statElement.forEach(element => {
        labels.push(element.date.substr(0, 10));
        caseData.push(element.covidCase);
        deathData.push(element.death);
        discharge.push(element.discharge);
      });
      console.log(labels);
      this.setState({
        chartData: {
          labels: labels,
          datasets: [{
            label: "Vaka",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(225,0,0,0.4)",
            borderColor: "red", // The main line color
            borderCapStyle: 'square',
            borderDash: [], // try [5, 15] for instance
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "black",
            pointBackgroundColor: "white",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "yellow",
            pointHoverBorderColor: "brown",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: caseData,
            spanGaps: true,
          }, {
            label: "Vefat",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(167,105,0,0.4)",
            borderColor: "rgb(167, 105, 0)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "white",
            pointBackgroundColor: "black",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "brown",
            pointHoverBorderColor: "yellow",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: deathData,
            spanGaps: false,
          }, {
            label: "Taburcu",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(110,105,0,0.4)",
            borderColor: "rgb(167, 105, 110)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "white",
            pointBackgroundColor: "black",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "brown",
            pointHoverBorderColor: "yellow",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: discharge,
            spanGaps: false,
          }
  
          ]
        }
      });
    });    
  }

  render() {
    return (
      <div className="Graphic">
        <ChartSection chartData={this.state.chartData} location="Ankara" />
      </div>
    );
  }
}

export default Graphic;
