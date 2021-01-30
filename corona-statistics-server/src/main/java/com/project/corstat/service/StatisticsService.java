package com.project.corstat.service;

import com.project.corstat.model.Statistics;
import com.project.corstat.repository.StatisticsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StatisticsService {

    @Autowired
    private StatisticsRepository repository;

    public Statistics addStatistics(Statistics statistics){
        return repository.insert(statistics);
    }


}
