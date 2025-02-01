package com.DevWeb.ClimaAgora.dto;

public class MinutelyForecastDTO {

    private double precip;
    private double snow;
    private double temp;
    private long ts;
    private String timestampLocal;
    private String timestampUtc;

    public double getPrecip() {
        return precip;
    }

    public void setPrecip(double precip) {
        this.precip = precip;
    }

    public double getSnow() {
        return snow;
    }

    public void setSnow(double snow) {
        this.snow = snow;
    }

    public double getTemp() {
        return temp;
    }

    public void setTemp(double temp) {
        this.temp = temp;
    }

    public long getTs() {
        return ts;
    }

    public void setTs(long ts) {
        this.ts = ts;
    }

    public String getTimestampLocal() {
        return timestampLocal;
    }

    public void setTimestampLocal(String timestampLocal) {
        this.timestampLocal = timestampLocal;
    }

    public String getTimestampUtc() {
        return timestampUtc;
    }

    public void setTimestampUtc(String timestampUtc) {
        this.timestampUtc = timestampUtc;
    }
}
