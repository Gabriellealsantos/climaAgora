package com.DevWeb.ClimaAgora.dto;

import java.util.List;

public class ClimateDataDTO {

    private List<WeatherDTO> data;
    private List<MinutelyForecastDTO> minutely;

    public List<MinutelyForecastDTO> getMinutely() {
        return minutely;
    }

    public List<WeatherDTO> getData() {
        return data;
    }

}
