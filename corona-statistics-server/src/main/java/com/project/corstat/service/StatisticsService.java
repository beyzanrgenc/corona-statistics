package com.project.corstat.service;

import com.project.corstat.model.Statistics;
import com.project.corstat.repository.StatisticsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;

@Service
public class StatisticsService {

    @Autowired
    private StatisticsRepository repository;

    public Statistics addStatistics(Statistics statistics) {
        List<Statistics> currentSameDayAndCity = repository.findByCityAndDate(statistics.getCity(), statistics.getDate());
        if (currentSameDayAndCity.size() == 0) { //first posted news for day and city
            return repository.insert(statistics);
        } else { //multi posted news for same day and city, then the recent statistics are true, update stats and add news to the list.
            Statistics savedStat = currentSameDayAndCity.get(0);
            //TODO: ADD CONTROL FOR NEWS DATE, JUST IN CASE
            savedStat.setDeath(statistics.getDeath());
            savedStat.setCovidCase(statistics.getCovidCase());
            savedStat.setDischarge(statistics.getDischarge());
            savedStat.getNews().add(statistics.getNews().get(0));
            return repository.save(savedStat);
        }
    }

    public List<Statistics> findByCity(String city) {
        String cityAllLowerCase = city.toLowerCase(new Locale("tr", "TR"));
        return repository.findByCityOrderByDateAsc(cityAllLowerCase);
    }

    public List<Statistics> getAll() {
        return repository.findAll(Sort.by(Sort.Direction.ASC, "date"));
    }
}
