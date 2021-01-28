package com.project.corstat.repository;

import com.project.corstat.model.Statistics;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StatisticsRepository extends MongoRepository<Statistics, String> {

}
