import { useEffect, useState } from "react";
import BackgroundImage from "../../components/BackgroundImage";
import Weather from "../../components/Weather";
import WeatherDetails from "../../components/WeatherDetails";
import * as weatherService from '../../services/weather-service';
import { WeatherResponseDTO } from "../../models/WeatherResponseDTO";
import { formatDate } from "../../utils/utils";

export default function Home() {
    const [weather, setWeather] = useState<WeatherResponseDTO | null>(null);

    useEffect(() => {
        weatherService.findWeatherResquest("São Paulo")
            .then(response => {
                setWeather(response.data);
                console.log("Dados do clima:", response.data);
            })
            .catch(error => console.error("Erro ao buscar clima:", error));
    }, []);

    return (
        <BackgroundImage>
            <div className="home-container">
                {weather ? (
                    <Weather
                        temperature={weather?.main.temp ?? 0}
                        city={weather?.name ?? "Desconhecido"}
                        date={weather ? formatDate(weather.dt) : "Carregando..."}
                    />
                ) : (
                    <p>Carregando...</p>
                )}
            </div>

            <div>
                {weather && <WeatherDetails weather={weather} />}
            </div>
        </BackgroundImage>
    );
}
