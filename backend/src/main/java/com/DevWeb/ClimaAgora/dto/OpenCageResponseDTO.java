package com.DevWeb.ClimaAgora.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class OpenCageResponseDTO {

    @JsonProperty("results")
    private List<CityDTO> results;

    @JsonProperty("status")
    private StatusDTO status;

    // Getters e Setters
    public List<CityDTO> getResults() {
        return results;
    }

    public void setResults(List<CityDTO> results) {
        this.results = results;
    }

    public StatusDTO getStatus() {
        return status;
    }

    public void setStatus(StatusDTO status) {
        this.status = status;
    }

}
