import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import PostNewsForm from './PostNewsForm';
import City from '../data/city';
import Keyword from '../data/keyword'

const REST_API_URL = 'http://localhost:8081/saveStatistics';

class PostNews extends Component {

  async postNewsStatistics(value){
    var postData = this.parseNews(value);
    const response = await axios.post(
      REST_API_URL, postData,
      { headers: { 'Content-Type': 'application/json' } }
    )
    console.log(response.data)
  }

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
        date = sentence.match(/\d{2}([.])\d{2}\1\d{4}/g)[0];
        sentence = sentence.replace(date,"");
      }
      if(covidCase === null){
        if(sentence.indexOf(Keyword.Vaka.name) !== -1){
          covidCase = sentence.match(/\d+/g)[0];
        }
      }
      if(death === null){
        if(sentence.indexOf(Keyword.Vefat.name) !== -1){
          death = sentence.match(/\d+/g)[0];
        }
      }
      if(discharge === null){
        if(sentence.indexOf(Keyword.Taburcu.name) !== -1){
          discharge = sentence.match(/\d+/g)[0];
        }
      }
      sentenceArrayIter++;
    }
    date = date.substr(3, 2)+"."+date.substr(0, 2)+"."+date.substr(6, 4);
    var currentDate = new Date();

    var postStatistics = {
      city: '', 
      date: new Date(date),
      covidCase: covidCase,
      death: death,
      discharge: discharge,
      news: 
      {
        newsText: newsText,
        newsDate: new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate(),currentDate.getHours(),currentDate.getMinutes(),currentDate.getSeconds())
      }
    }
    console.log(postStatistics);
    return postStatistics;
  }


  render() {
    return (
      <div className="PostNews">
        <PostNewsForm onSubmitNews={this.postNewsStatistics.bind(this)} />
      </div>
    )
  }
}

export default PostNews;
