import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import ChartSection from './ChartSection';
import FilterGraphicSection from './FilterGraphicSection';

const REST_API_URL_GET_ALL = 'http://localhost:8081/getStatistics';
const REST_API_URL_GET_BY_CITY = 'http://localhost:8081/getStatisticsByCity/';

class Graphic extends Component {

  constructor() {
    super();
    this.state = {
      location: 'Ankara',
      chartData: {}
    }
  }

  cumulativeChanged(value) {
    if (value === true) {
      this.getChartData(REST_API_URL_GET_ALL, "");
    } else {
      this.getChartData(REST_API_URL_GET_BY_CITY, this.state.location);
    }
  }

  selectionChanged(value) {
    this.setState({ location: value});
    this.getChartData(REST_API_URL_GET_BY_CITY, value);
  }

  componentWillMount() {
    this.getChartData(REST_API_URL_GET_BY_CITY, this.state.location);
  }

  getChartData(url,value) {
    axios.get(url + value).then(res => {
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
      this.setState({
        chartData: {
          labels: labels,
          datasets: [{
            label: "Vaka",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "transparent",
            borderColor: "blue",
            borderCapStyle: 'square',
            borderDash: [],
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
            backgroundColor: "transparent",
            borderColor: "red",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "white",
            pointBackgroundColor: "black",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "yellow",
            pointHoverBorderColor: "brown",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: deathData,
            spanGaps: false,
          }, {
            label: "Taburcu",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "transparent",
            borderColor: "green",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "white",
            pointBackgroundColor: "black",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "yellow",
            pointHoverBorderColor: "brown",
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
        <ChartSection chartData={this.state.chartData} location={this.state.location} />
        <FilterGraphicSection onCumulativeChanged={this.cumulativeChanged.bind(this)} onSelectionChanged={this.selectionChanged.bind(this)} />
      </div>
    );
  }
}

export default Graphic;
