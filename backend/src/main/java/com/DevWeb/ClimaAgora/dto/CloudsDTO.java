package com.DevWeb.ClimaAgora.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CloudsDTO {

    @JsonProperty("all")
    private int all;

    public int getAll() {
        return all;
    }

    public void setAll(int all) {
        this.all = all;
    }
}
