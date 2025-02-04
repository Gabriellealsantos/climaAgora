package com.DevWeb.ClimaAgora.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class WeatherResponseDTO {

    @JsonProperty("coord")
    private CoordDTO coord;

    @JsonProperty("weather")
    private List<WeatherDTO> weather;

    @JsonProperty("base")
    private String base;

    @JsonProperty("main")
    private MainDTO main;

    @JsonProperty("visibility")
    private int visibility;

    @JsonProperty("wind")
    private WindDTO wind;

    @JsonProperty("clouds")
    private CloudsDTO clouds;

    @JsonProperty("dt")
    private long dt;

    @JsonProperty("sys")
    private SysDTO sys;

    @JsonProperty("timezone")
    private int timezone;

    @JsonProperty("id")
    private long id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("cod")
    private int cod;

    public CoordDTO getCoord() {
        return coord;
    }

    public void setCoord(CoordDTO coord) {
        this.coord = coord;
    }

    public String getBase() {
        return base;
    }

    public void setBase(String base) {
        this.base = base;
    }

    public MainDTO getMain() {
        return main;
    }

    public void setMain(MainDTO main) {
        this.main = main;
    }

    public int getVisibility() {
        return visibility;
    }

    public void setVisibility(int visibility) {
        this.visibility = visibility;
    }

    public WindDTO getWind() {
        return wind;
    }

    public void setWind(WindDTO wind) {
        this.wind = wind;
    }

    public CloudsDTO getClouds() {
        return clouds;
    }

    public void setClouds(CloudsDTO clouds) {
        this.clouds = clouds;
    }

    public long getDt() {
        return dt;
    }

    public void setDt(long dt) {
        this.dt = dt;
    }

    public SysDTO getSys() {
        return sys;
    }

    public void setSys(SysDTO sys) {
        this.sys = sys;
    }

    public int getTimezone() {
        return timezone;
    }

    public void setTimezone(int timezone) {
        this.timezone = timezone;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCod() {
        return cod;
    }

    public void setCod(int cod) {
        this.cod = cod;
    }

    public List<WeatherDTO> getWeather() {
        return weather;
    }

}
