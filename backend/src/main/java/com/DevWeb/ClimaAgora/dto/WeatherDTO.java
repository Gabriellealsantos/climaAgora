package com.DevWeb.ClimaAgora.dto;

import java.util.List;

public class WeatherDTO {

    private double appTemp;
    private int aqi;
    private String cityName;
    private int clouds;
    private String countryCode;
    private String datetime;
    private double dewpt;
    private double dhi;
    private double dni;
    private double elevAngle;
    private double ghi;
    private Double gust;
    private double hAngle;
    private double lat;
    private double lon;
    private String obTime;
    private String pod;
    private double precip;
    private double pres;
    private int rh;
    private double slp;
    private double snow;
    private double solarRad;
    private List<String> sources;
    private String stateCode;
    private String station;
    private String sunrise;
    private String sunset;
    private double temp;
    private String timezone;
    private long ts;
    private int uv;
    private double vis;
    private WeatherDescriptionDTO weather;
    private String windCdir;
    private String windCdirFull;
    private int windDir;
    private double windSpd;

    public double getAppTemp() {
        return appTemp;
    }

    public void setAppTemp(double appTemp) {
        this.appTemp = appTemp;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public int getAqi() {
        return aqi;
    }

    public void setAqi(int aqi) {
        this.aqi = aqi;
    }

    public int getClouds() {
        return clouds;
    }

    public void setClouds(int clouds) {
        this.clouds = clouds;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public String getDatetime() {
        return datetime;
    }

    public void setDatetime(String datetime) {
        this.datetime = datetime;
    }

    public double getDhi() {
        return dhi;
    }

    public void setDhi(double dhi) {
        this.dhi = dhi;
    }

    public double getDewpt() {
        return dewpt;
    }

    public void setDewpt(double dewpt) {
        this.dewpt = dewpt;
    }

    public double getDni() {
        return dni;
    }

    public void setDni(double dni) {
        this.dni = dni;
    }

    public double getElevAngle() {
        return elevAngle;
    }

    public void setElevAngle(double elevAngle) {
        this.elevAngle = elevAngle;
    }

    public Double getGust() {
        return gust;
    }

    public void setGust(Double gust) {
        this.gust = gust;
    }

    public double gethAngle() {
        return hAngle;
    }

    public void sethAngle(double hAngle) {
        this.hAngle = hAngle;
    }

    public double getGhi() {
        return ghi;
    }

    public void setGhi(double ghi) {
        this.ghi = ghi;
    }

    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public double getLon() {
        return lon;
    }

    public void setLon(double lon) {
        this.lon = lon;
    }

    public String getPod() {
        return pod;
    }

    public void setPod(String pod) {
        this.pod = pod;
    }

    public String getObTime() {
        return obTime;
    }

    public void setObTime(String obTime) {
        this.obTime = obTime;
    }

    public double getPrecip() {
        return precip;
    }

    public void setPrecip(double precip) {
        this.precip = precip;
    }

    public double getPres() {
        return pres;
    }

    public void setPres(double pres) {
        this.pres = pres;
    }

    public int getRh() {
        return rh;
    }

    public void setRh(int rh) {
        this.rh = rh;
    }

    public double getSlp() {
        return slp;
    }

    public void setSlp(double slp) {
        this.slp = slp;
    }

    public double getSnow() {
        return snow;
    }

    public void setSnow(double snow) {
        this.snow = snow;
    }

    public List<String> getSources() {
        return sources;
    }


    public double getSolarRad() {
        return solarRad;
    }

    public void setSolarRad(double solarRad) {
        this.solarRad = solarRad;
    }

    public String getStation() {
        return station;
    }

    public void setStation(String station) {
        this.station = station;
    }

    public String getStateCode() {
        return stateCode;
    }

    public void setStateCode(String stateCode) {
        this.stateCode = stateCode;
    }

    public String getSunrise() {
        return sunrise;
    }

    public void setSunrise(String sunrise) {
        this.sunrise = sunrise;
    }

    public String getSunset() {
        return sunset;
    }

    public void setSunset(String sunset) {
        this.sunset = sunset;
    }

    public double getTemp() {
        return temp;
    }

    public void setTemp(double temp) {
        this.temp = temp;
    }

    public String getTimezone() {
        return timezone;
    }

    public void setTimezone(String timezone) {
        this.timezone = timezone;
    }

    public long getTs() {
        return ts;
    }

    public void setTs(long ts) {
        this.ts = ts;
    }

    public double getVis() {
        return vis;
    }

    public void setVis(double vis) {
        this.vis = vis;
    }

    public int getUv() {
        return uv;
    }

    public void setUv(int uv) {
        this.uv = uv;
    }

    public WeatherDescriptionDTO getWeather() {
        return weather;
    }

    public void setWeather(WeatherDescriptionDTO weather) {
        this.weather = weather;
    }

    public String getWindCdir() {
        return windCdir;
    }

    public void setWindCdir(String windCdir) {
        this.windCdir = windCdir;
    }

    public String getWindCdirFull() {
        return windCdirFull;
    }

    public void setWindCdirFull(String windCdirFull) {
        this.windCdirFull = windCdirFull;
    }

    public int getWindDir() {
        return windDir;
    }

    public void setWindDir(int windDir) {
        this.windDir = windDir;
    }

    public double getWindSpd() {
        return windSpd;
    }

    public void setWindSpd(double windSpd) {
        this.windSpd = windSpd;
    }
}
