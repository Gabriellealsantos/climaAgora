package com.DevWeb.ClimaAgora.resources;

import com.DevWeb.ClimaAgora.dto.WeatherResponseDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Controller
@RequestMapping(value = "weather")
public class WeatherResource {

    @Value("${openweather.api.key}") // Corrigi a variável de ambiente
    private String API_KEY;

    private final WebClient webClient = WebClient.create("https://api.openweathermap.org/data/2.5");

    @GetMapping(value = "/currents")
    public Mono<ResponseEntity<WeatherResponseDTO>> currentWeather(@RequestParam(value = "city", defaultValue = "Sapeaçu") String city) {
        Mono<WeatherResponseDTO> response = webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/weather")
                        .queryParam("lang", "pt")
                        .queryParam("q", city)
                        .queryParam("units", "metric")
                        .queryParam("appid", API_KEY)
                        .build())
                .retrieve()
                .bodyToMono(WeatherResponseDTO.class);
        return response.map(ResponseEntity::ok);
    }
    
}
