import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import '../App.css';


class ChartSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        location: 'City'
    }

    render() {
        return (
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    options={{
                        scales: {
                                  yAxes: [{
                                      ticks: {
                                          beginAtZero:true
                                      },
                                      scaleLabel: {
                                           display: true,
                                           labelString: 'Covid19 Statistics in ' + this.props.location,
                                           fontSize: 20 
                                        }
                                  }]            
                              }  
                      }}
                />       
            </div>
        )
    }
}

export default ChartSection;

