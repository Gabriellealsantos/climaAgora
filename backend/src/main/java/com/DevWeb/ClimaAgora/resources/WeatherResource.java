package com.DevWeb.ClimaAgora.resources;

import com.DevWeb.ClimaAgora.dto.ClimateDataDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Controller
@RequestMapping(value = "weather")
public class WeatherResource {

    @Value("${weatherbit.api.key}")
    private String apiKey;

    private final WebClient webClient = WebClient.create("https://api.weatherbit.io/v2.0");

    @GetMapping(value = "/currents")
    public Mono<ResponseEntity<ClimateDataDTO>> currentWeather() {
        Mono<ClimateDataDTO> response = webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/current")
                        .queryParam("lat", "35.7796")
                        .queryParam("lon", "-78.6382")
                        .queryParam("key", apiKey)
                        .queryParam("include", "minutely")
                        .build())
                .retrieve()
                .bodyToMono(ClimateDataDTO.class);
        return response.map(ResponseEntity::ok);
    }
}
