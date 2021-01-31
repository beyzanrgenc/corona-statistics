package com.project.corstat.controller;

import com.project.corstat.model.Statistics;
import com.project.corstat.repository.StatisticsRepository;
import com.project.corstat.service.StatisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StatisticsController {

    @Autowired
    private StatisticsService service;

    @PostMapping("/addStatistics")
    public ResponseEntity<Statistics> addStatistics(@RequestBody Statistics statistics) throws ParseException {
        service.addStatistics(statistics);
        return ResponseEntity.ok(statistics);
    }

    @GetMapping("/getStatistics")
    public ResponseEntity<Iterable<Statistics>> getStatistics() {
        List<Statistics> stats = service.getAll();
        return ResponseEntity.ok(stats);
    }

    @GetMapping("/getStatisticsByCity/{city}")
    public ResponseEntity<Iterable<Statistics>> getStatisticsByCity(@PathVariable String city) {
        List<Statistics> stats = service.findByCity(city);
        return ResponseEntity.ok(stats);
    }
}

