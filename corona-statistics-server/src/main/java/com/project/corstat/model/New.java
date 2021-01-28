package com.project.corstat.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Getter
@Setter
@ToString
public class New {

    private String newsText;
    private Date newsDate;

    public New(String newsText, Date newsDate) {
        this.newsText = newsText;
        this.newsDate = newsDate;
    }
}
