package com.project.corstat.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter
@Setter
@ToString(exclude = "id")
@Document(collection = "Statistics")
public class Statistics {

    @Id
    private String id;
    private String city;
    private Date date;
    private int covidCase;
    private int death;
    private int discharge;
    private News news;

    public Statistics(String city, Date date, int covidCase, int death, int discharge, News news) {
        this.city = city;
        this.date = date;
        this.covidCase = covidCase;
        this.death = death;
        this.discharge = discharge;
        this.news = news;
    }
}
