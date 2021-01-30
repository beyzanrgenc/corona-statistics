import React, { Component } from 'react';
import '../App.css';


class FilterGraphicSection extends Component {
    constructor(props) {
        super(props);
        this.state = { status: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) { 
        this.setState({ status: event.target.checked}); 
        var isCumulativeChecked = this.state.status;
        this.props.onCumulativeChanged(isCumulativeChecked);
    }

    render() {
        return (
            <div className="FilterGraphicSection">
                <form>
                    <div className="form-row">
                        <div className="col-7">
                            <select className="form-control form-control-sm" ref="LayerL6Select" name="LayerL6Select" id="LayerL6Select">
                                <option value="1">Apple</option>
                                <option value="2">Mango</option>
                            </select>
                        </div>
                        <div className="col">
                            <input class="form-check-input" type="checkbox" value={this.state.status} id="isCumulativeCheckBox" onChange={this.handleChange}/>
                            <label class="form-check-label" for="isCumulativeCheckBox">
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