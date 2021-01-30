import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import PostNewsForm from './PostNewsForm';
import City from '../data/City';
import Keyword from '../data/Keyword'

const REST_API_URL = 'http://localhost:8081/addStatistics';

class PostNews extends Component {

  async postNewsStatistics(value) {
    var postData = this.parseNews(value);
    if(postData === null){
      return;
    }
    const response = await axios.post(
      REST_API_URL, postData,
      { headers: { 'Content-Type': 'application/json' } }
    )
    if(response.status === 200){
      alert("The news has been sent successfully.");
    }
  }

  parseNews(value) {
    var newsText = value;
    var newTextLower = newsText.toLocaleLowerCase('tr-TR');
    newTextLower = newTextLower.replace("  ", " ");
    var sentenceArray = newTextLower.split(". ");
    var sentenceArrayIter = 0;
    var sentence = "";
    var date = null, covidCase = null, death = null, discharge = null, city = null, dateArr = null, caseArr = null, deathArr = null, dischargeArr = null;
    while (sentenceArrayIter < sentenceArray.length) {
      sentence = sentenceArray[sentenceArrayIter];
      if (date === null) {
        dateArr = sentence.match(/\d{2}([.])\d{2}\1\d{4}/g);
        if(dateArr !== null){
          date = dateArr[0];
          sentence = sentence.replace(date, "");
        }
      }
      if (covidCase === null) {
        if (sentence.indexOf(Keyword.Vaka.name) !== -1) {
          caseArr = sentence.match(/\d+/g);
          if(caseArr !== null){
            covidCase = caseArr[0];
          }
        }
      }
      if (death === null) {
        if (sentence.indexOf(Keyword.Vefat.name) !== -1) {
          deathArr = sentence.match(/\d+/g);
          if(deathArr !== null){
            death = deathArr[0];
          }
        }
      }
      if (discharge === null) {
        if (sentence.indexOf(Keyword.Taburcu.name) !== -1) {
          dischargeArr = sentence.match(/\d+/g);
          if(dischargeArr !== null){
            discharge = dischargeArr[0];
          }
        }
      }
      sentenceArrayIter++;
    }
    var i;
    for (i = 0; i < City.Cities.length; i++) {
      if(newTextLower.search(City.Cities[i].name) !== -1){
        city = City.Cities[i].name;
        break;
      }

    }

    if(city === null || date === null || covidCase === null || death === null || discharge === null || newsText === null || newsText === ''){
      alert("Information in the news is incomplete. Please check your information and re-enter the news.");
      return null;
    }

    date = date.substr(3, 2) + "." + (parseInt(date.substr(0, 2))+1) + "." + date.substr(6, 4);
    var currentDate = new Date();

    var postStatistics = {
      city: city,
      date: new Date(date),
      covidCase: covidCase,
      death: death,
      discharge: discharge,
      news:
      [{
        newsText: newsText,
        newsDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds())
      }]
    }
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
