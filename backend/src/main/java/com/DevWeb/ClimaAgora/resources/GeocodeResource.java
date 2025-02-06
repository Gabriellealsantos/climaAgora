package com.DevWeb.ClimaAgora.resources;

import com.DevWeb.ClimaAgora.dto.OpenCageResponseDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Controller
@RequestMapping(value = "geocode")
public class GeocodeResource {

    @Value("${opencage.api.key}")
    private String API_KEY;

    private final WebClient webClient = WebClient.create("https://api.opencagedata.com/geocode/v1");

    @GetMapping(value = "/cities")
    public Mono<ResponseEntity<OpenCageResponseDTO>> searchCities(@RequestParam(value = "query", defaultValue = "salvador") String query) {
        Mono<OpenCageResponseDTO> response = webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/json")
                        .queryParam("q", query)
                        .queryParam("key", API_KEY)
                        .build())
                .retrieve()
                .bodyToMono(OpenCageResponseDTO.class);
        return response.map(ResponseEntity::ok);
    }
}
