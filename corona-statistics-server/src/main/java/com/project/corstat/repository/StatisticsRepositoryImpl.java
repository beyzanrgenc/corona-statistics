package com.project.corstat.repository;

import com.project.corstat.model.Statistics;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

public class StatisticsRepositoryImpl implements StatisticsRepositoryCustom {

    @Autowired
    MongoOperations mongoOperations;

    public void saveOrUpdate(Statistics statistics) {
        mongoOperations.upsert(new Query(Criteria.where("city").is(statistics.getCity()).and("date").is(statistics.getDate())),
                new Update()
                        .set("covidCase", statistics.getCovidCase())
                        .set("death", statistics.getDeath())
                        .set("discharge", statistics.getDischarge())
                        .addToSet("news",statistics.getNews()),
                Statistics.class);
    }
}
