package com.project.corstat.repository;

import com.project.corstat.model.Statistics;

public interface StatisticsRepositoryCustom {
    void saveOrUpdate(Statistics statistics);
}
