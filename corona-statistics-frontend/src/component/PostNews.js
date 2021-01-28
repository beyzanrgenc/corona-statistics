import React, { Component } from 'react';
import '../App.css';
import PostNewsForm from './PostNewsForm';


class PostNews extends Component {


  parseNews(value) {
    alert('A name was submitted: ' + value);
    var newsText = value;
    var newTextLower = newsText.toLowerCase();
    alert(newTextLower);
  }


  render() {
    return (
      <div className="PostNews">
        <PostNewsForm onSubmitNews={this.parseNews.bind(this)} />
      </div>
    )
  }
}

export default PostNews;
