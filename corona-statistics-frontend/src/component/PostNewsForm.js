import React, { Component } from 'react';
import '../App.css';


class PostNewsForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { this.setState({ value: event.target.value }); }
    handleSubmit(event) {
        event.preventDefault();
        var newText = this.state.value;
        this.props.onSubmitNews(newText);
        this.setState({
            value: ''
          });   
    }

    render() {
        return (
            <div className="PostNewsForm">
                <form className="news-form" onSubmit={this.handleSubmit}>
                    <h1>You can write your news here!</h1>
                    <div className="form-group">
                        <textarea className="news-text-area form-control" id="postNewTextArea" rows="15" value={this.state.value} onChange={this.handleChange}></textarea>
                    </div>
                    <button type="submit" class="btn btn-info btn-lg">Post</button>
                </form>
            </div>
        )
    }
}

export default PostNewsForm;