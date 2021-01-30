import React, { Component } from 'react';
import '../App.css';
import City from '../data/City';


class FilterGraphicSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            status: false,
            selected: "ANKARA"
         };
        this.handleCumulativeChange = this.handleCumulativeChange.bind(this);
        this.handleSelectionChange = this.handleSelectionChange.bind(this);
    }

    handleCumulativeChange(event) {
        var isCumulativeChecked = event.target.checked;
        this.setState({ status: isCumulativeChecked });
        this.props.onCumulativeChanged(isCumulativeChecked);
    }

    handleSelectionChange(event) {
        var selectedValue = event.target.value;
        this.setState({ selected: selectedValue});
        this.props.onSelectionChanged(selectedValue);
    }

    render() {
        var ComboBoxData = City.Cities,
            MakeComboBoxItem = function (item) {
                return <option key={item.name}>{item.name.toLocaleUpperCase('tr-TR')}</option>;
            };
        return (
            <div className="FilterGraphicSection">
                <form className="filter-form">
                    <div className="form-row">
                        <div className="col-5">
                            <select className="form-control form-control-sm" value={this.state.selected} onChange={this.handleSelectionChange}>
                                {ComboBoxData.map(MakeComboBoxItem)}
                            </select>
                        </div>
                        <div className="col">
                            <input className="form-check-input" type="checkbox" value={this.state.status} id="isCumulativeCheckBox" onChange={this.handleCumulativeChange} />
                            <label className="form-check-label" htmlFor="isCumulativeCheckBox">
                                View the cumulative data.
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default FilterGraphicSection;