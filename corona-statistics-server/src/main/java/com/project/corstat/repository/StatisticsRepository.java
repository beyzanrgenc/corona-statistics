package com.project.corstat.repository;

import com.project.corstat.model.Statistics;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.List;

public interface StatisticsRepository extends MongoRepository<Statistics, String> {
    List<Statistics> findByCityOrderByDateAsc(String city);

    List<Statistics> findByCityAndDate(String city, Date date);
}
