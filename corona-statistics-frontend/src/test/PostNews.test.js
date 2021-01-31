import React from 'react';
import PostNews from '../component/PostNews';
import renderer from 'react-test-renderer';

window.alert = () => { };

test("Parse the news text correctly, test1", () => {
  let component = renderer.create(<PostNews />).getInstance();
  let newsText = "20.04.2020 tarihinde Ankara'da Korona virüs salgınında yapılan testlerde 15 yeni vaka bulundu. 1 kişi korona dan vefat etti. 5 kişide taburcu oldu.";
  let tree = component.parseNews(newsText);
  let currentDate = new Date();
  let newsStatistics = {
    city: 'ankara',
    date: new Date("04.20.2020"),
    covidCase: "15",
    death: "1",
    discharge: "5",
    news:
      [{
        newsText: "20.04.2020 tarihinde Ankara'da Korona virüs salgınında yapılan testlerde 15 yeni vaka bulundu. 1 kişi korona dan vefat etti. 5 kişide taburcu oldu.",
        newsDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds())
      }]
  }
  expect(tree).toMatchObject(newsStatistics);
})

test("Parse the news text correctly, test2", () => {
  let component = renderer.create(<PostNews />).getInstance();
  let newsText = "Korona virüs salgınında yapılan testlerde 19.04.2020 tarihinde  İstanbul da 30 yeni vaka tespit edil. İstanbul da taburcu sayısı 7 kişi .  3 kişi de vefat etti. ";
  let tree = component.parseNews(newsText);
  let currentDate = new Date();
  let newsStatistics = {
    city: 'istanbul',
    date: new Date("04.19.2020"),
    covidCase: "30",
    death: "3",
    discharge: "7",
    news:
      [{
        newsText: "Korona virüs salgınında yapılan testlerde 19.04.2020 tarihinde  İstanbul da 30 yeni vaka tespit edil. İstanbul da taburcu sayısı 7 kişi .  3 kişi de vefat etti. ",
        newsDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds())
      }]
  }
  expect(tree).toMatchObject(newsStatistics);
})

test("Parse the news text correctly, test3", () => {
  let component = renderer.create(<PostNews />).getInstance();
  let newsText = "19.04.2020 tarihinde İstanbul  için korona virüs ile ilgili yeni bir açıklama yapıldı. Korona virüs salgınında yapılan testlerde 20 yeni vaka tespit edildi. taburcu sayısı ise 7 oldu.  3 kişin de vefat ettiği öğrenildi.  ";
  let tree = component.parseNews(newsText);
  let currentDate = new Date();
  let newsStatistics = {
    city: 'istanbul',
    date: new Date("04.19.2020"),
    covidCase: "20",
    death: "3",
    discharge: "7",
    news:
      [{
        newsText: "19.04.2020 tarihinde İstanbul  için korona virüs ile ilgili yeni bir açıklama yapıldı. Korona virüs salgınında yapılan testlerde 20 yeni vaka tespit edildi. taburcu sayısı ise 7 oldu.  3 kişin de vefat ettiği öğrenildi.  ",
        newsDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds())
      }]
  }
  expect(tree).toMatchObject(newsStatistics);
})

test("Get the null text return null, test4", () => {
  let component = renderer.create(<PostNews />).getInstance();
  let newsText = "";
  let tree = component.parseNews(newsText);
  expect(tree).toEqual(null);
})

test("Get the missing info text return null, test5", () => {
  let component = renderer.create(<PostNews />).getInstance();
  let newsText = "Bilgiler eksik girildi.";
  let tree = component.parseNews(newsText);
  expect(tree).toEqual(null);
})

test("Get the missing info(date) text return null, test6", () => {
  let component = renderer.create(<PostNews />).getInstance();
  let newsText = "tarihinde İstanbul  için korona virüs ile ilgili yeni bir açıklama yapıldı. Korona virüs salgınında yapılan testlerde 20 yeni vaka tespit edildi. taburcu sayısı ise 7 oldu.  3 kişin de vefat ettiği öğrenildi.  ";
  let tree = component.parseNews(newsText);
  expect(tree).toEqual(null);
})

test("Get the missing info(case) text return null, test7", () => {
  let component = renderer.create(<PostNews />).getInstance();
  let newsText = "19.04.2020 tarihinde İstanbul  için korona virüs ile ilgili yeni bir açıklama yapıldı. Korona virüs salgınında yapılan testlerde vaka tespit edildi. taburcu sayısı ise 7 oldu.  3 kişin de vefat ettiği öğrenildi.  ";
  let tree = component.parseNews(newsText);
  expect(tree).toEqual(null);
})

test("Get the missing info(city) text return null, test8", () => {
  let component = renderer.create(<PostNews />).getInstance();
  let newsText = "19.04.2020 tarihinde için korona virüs ile ilgili yeni bir açıklama yapıldı. Korona virüs salgınında yapılan testlerde vaka tespit edildi. taburcu sayısı ise 7 oldu.  3 kişin de vefat ettiği öğrenildi.  ";
  let tree = component.parseNews(newsText);
  expect(tree).toEqual(null);
})