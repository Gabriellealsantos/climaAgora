import { useEffect, useState } from "react";
import BackgroundImage from "../../components/BackgroundImage";
import Weather from "../../components/Weather";
import WeatherDetails from "../../components/WeatherDetails";
import * as weatherService from '../../services/weather-service';
import { WeatherResponseDTO } from "../../models/WeatherResponseDTO";
import { formatDate } from "../../utils/utils";
import { CityDTO } from "../../models/CityDTO";

export default function Home() {

    const [weather, setWeather] = useState<WeatherResponseDTO | null>(null);

    const [city, setCity] = useState<{ city: CityDTO } | undefined>(undefined);


    useEffect(() => {

        const nomeCidade = city?.city?.formatted
            ? city.city.formatted.split(",")[0]
            : "Sapeaçu";

        weatherService.findWeatherResquest(nomeCidade)
            .then(response => {
                setWeather(response.data);
            })
            .catch(error => console.error("Erro ao buscar clima com a nova cidade:", error));
    }, [city]);

    const handleCitySelect = (city: CityDTO) => {
        setCity({ city });
    };

    return (
        <BackgroundImage>
            <div className="home-container">
                {weather ? (
                    <Weather
                        temperature={weather.main.temp ?? 0}
                        city={weather.name ?? "Desconhecido"}
                        date={formatDate(weather.dt , weather.timezone)}
                    />
                ) : (
                    <p>Carregando...</p>
                )}
            </div>

            <div>
                {weather && (
                    <WeatherDetails weather={weather} onCitySelect={handleCitySelect} />
                )}
            </div>
        </BackgroundImage>
    );
}