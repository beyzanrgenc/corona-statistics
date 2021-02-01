package com.project.corstat;

import com.project.corstat.controller.StatisticsController;
import com.project.corstat.model.News;
import com.project.corstat.model.Statistics;
import com.project.corstat.service.StatisticsService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

import static org.mockito.Mockito.when;

@WebMvcTest(StatisticsController.class)
public class CoronaStatisticsApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private StatisticsService service;

    @Test
    public void shouldReturnAllStats() throws Exception {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        String dateInString = "2020-04-20";
        SimpleDateFormat isoFormat = new SimpleDateFormat("yyyy-MM-dd");
        isoFormat.setTimeZone(TimeZone.getTimeZone("UTC"));
        Date date = isoFormat.parse(dateInString);
        List<News> news = new ArrayList<>();
        news.add(new News("20.04.2020 tarihinde Ankara da Korona virüs salgınında yapılan testlerde 15 yeni vaka bulundu. 1 kişi korona dan vefat etti. 5 kişide taburcu oldu.",date));
        when(service.getAll())
                .thenReturn(List.of(new Statistics("ankara", date,15,1,5, news)));

        this.mockMvc
                .perform(MockMvcRequestBuilders.get("/getStatistics"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.size()").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].city").value("ankara"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].covidCase").value("15"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].death").value("1"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].discharge").value("5"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].date").value(dateInString+"T00:00:00.000+00:00"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].news[0].newsText").value("20.04.2020 tarihinde Ankara da Korona virüs salgınında yapılan testlerde 15 yeni vaka bulundu. 1 kişi korona dan vefat etti. 5 kişide taburcu oldu."));
    }

}