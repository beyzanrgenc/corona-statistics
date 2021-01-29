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
      let data = [];      
      statElement.forEach(element => {
        labels.push(element.date.substr(0, 10));
        data.push(element.covidCase);
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
            data: [65, 59, 80, 81, 56, 55, 40,50 , 60, 55, 30, 78],
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
            data: [10, 20, 60, 95, 64, 78, 90, 87, 70, 40, 70, 89],
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
            data: [100, 20, 60, 955, 64, 78, 90, 78, 70, 40, 70, 89],
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
