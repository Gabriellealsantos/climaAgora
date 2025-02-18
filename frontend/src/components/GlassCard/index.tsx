import { WeatherResponseDTO } from '../../models/WeatherResponseDTO';
import { formatDate } from '../../utils/utils';
import './styles.css'

interface WeatherDetailsProps {
    weather: WeatherResponseDTO;
}


export default function GlassCard({ weather }: WeatherDetailsProps) {
    return (
        <div className="glass-card">
            <section className="content-section">
                <div className="weather-info">
                    <div className="left-side">
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p className="condition">{weather.weather[0].description}</p>
                    </div>
                    <div className="right-side">
                        <div className="location">
                            <span>{weather.name}</span>
                        </div>
                        <p className="card-date">{formatDate(weather.dt, weather.timezone)}</p>
                        <p className="card-temperature">{Math.round(weather.main.temp) + "°C"}</p>
                    </div>
                </div>
                <div className="forecast">
                    <div className="forecast-item">
                        <p className="forecast-date">Temp max</p>
                        <p className="forecast-temp">{Math.round(weather.main.temp_max) + "°"}</p>
                    </div>
                    <div className="separator"></div>
                    <div className="forecast-item">
                        <p className="forecast-date">Temp min</p>
                        <p className="forecast-temp">{Math.round(weather.main.temp_min) + "°"}</p>
                    </div>
                    <div className="separator"></div>
                    <div className="forecast-item">
                        <p className="forecast-date">Umidade</p>
                        <p className="forecast-temp">{Math.round(weather.main.humidity) + "%"}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

