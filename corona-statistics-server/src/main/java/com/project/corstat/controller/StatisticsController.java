package com.project.corstat.controller;

import com.project.corstat.model.Statistics;
import com.project.corstat.repository.StatisticsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StatisticsController {

    @Autowired
    private StatisticsRepository repository;

    @PostMapping("/saveStatistics")
    public void saveStatistics(@RequestBody Statistics statistics) {
        repository.save(statistics);
    }
}

