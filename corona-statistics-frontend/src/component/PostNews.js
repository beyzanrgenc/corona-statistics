import React, { Component } from 'react';
import '../App.css';
import PostNewsForm from './PostNewsForm';
import City from '../data/city';
import Keyword from '../data/keyword'

class PostNews extends Component {


  parseNews(value) {
    var newsText = value;
    var newTextLower = newsText.toLowerCase();
    var sentenceArray = newTextLower.split(". ");
    var sentenceArrayIter = 0;
    var sentence = "";
    var date = null, covidCase = null, death = null, discharge = null;
    while(sentenceArrayIter < sentenceArray.length){
      sentence = sentenceArray[sentenceArrayIter];
      if(date === null){
        date = sentence.match(/\d{2}([.])\d{2}\1\d{4}/g);
      }
      if(covidCase === null){
        if(sentence.indexOf(Keyword.Vaka.name) != -1){
          covidCase = sentence.match(/\d+/g);
        }
      }
      if(death === null){
        if(sentence.indexOf(Keyword.Vefat.name) != -1){
          death = sentence.match(/\d+/g);
        }
      }
      if(discharge === null){
        if(sentence.indexOf(Keyword.Taburcu.name) != -1){
          discharge = sentence.match(/\d+/g);
        }
      }
      sentenceArrayIter++;
    }
    return newTextLower;
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
