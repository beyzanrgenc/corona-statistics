package com.project.corstat.controller;

import com.project.corstat.model.Statistics;
import com.project.corstat.repository.StatisticsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StatisticsController {

    @Autowired
    private StatisticsRepository repository;

    @PostMapping("/saveStatistics")
    public ResponseEntity<Statistics> saveStatistics(@RequestBody Statistics statistics) {
        repository.save(statistics);
        return ResponseEntity.ok(statistics);
    }

    @GetMapping("/getStatistics")
    public ResponseEntity<Iterable<Statistics>> getStatistics() {
        List<Statistics> stats = repository.findAll(Sort.by(Sort.Direction.ASC, "date"));
        return ResponseEntity.ok(stats);
    }

    @GetMapping("/getStatistics/{city}")
    public ResponseEntity<Iterable<Statistics>> getStatisticsByCity(@PathVariable String city) {
        List<Statistics> stats = repository.findByCityOrderByDateAsc(city);
        return ResponseEntity.ok(stats);
    }
}

