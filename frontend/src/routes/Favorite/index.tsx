import { useEffect, useState } from 'react';
import * as userService from '../../services/user-service'; 
import * as weatherService from '../../services/weather-service'; 
import nuvensImg from '../../assets/nuvens.svg';
import GlassCard from '../../components/GlassCard';
import { WeatherResponseDTO } from '../../models/WeatherResponseDTO';
import './styles.css';

export default function Favorite() {
    const [favorites, setFavorites] = useState<string[]>([]);
    const [weatherData, setWeatherData] = useState<WeatherResponseDTO[]>([]);

    useEffect(() => {
        // Obter as cidades favoritas
        userService.getListFavorite().then(response => {
            setFavorites(response.data);
        });
    }, []);

    useEffect(() => {
        // Para cada cidade favorita, obter o clima
        const fetchWeather = async () => {
            const weatherPromises = favorites.map(city => weatherService.findWeatherResquest(city));
            const weatherResponses = await Promise.all(weatherPromises);
            setWeatherData(weatherResponses.map(response => response.data));
        };

        if (favorites.length > 0) {
            fetchWeather();
        }
    }, [favorites]);

    return (
        <div className='favorite-container'>
            <div className='favorite-content'>
                {weatherData.map((weather, index) => (
                    <GlassCard key={index} weather={weather} />
                ))}
                <img src={nuvensImg} alt="nuvens" />
            </div>
        </div>
    );
}
