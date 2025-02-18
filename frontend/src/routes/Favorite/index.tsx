import { useEffect, useState } from 'react';
import * as userService from '../../services/user-service';
import * as weatherService from '../../services/weather-service';
import nuvensImg from '../../assets/nuvens.svg';
import { WeatherResponseDTO } from '../../models/WeatherResponseDTO';
import Carousel from '../../components/Carousel';
import './styles.css';
import { Link } from 'react-router-dom';

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
            <div>
                <Link to="/home" className="link-voltar">
                    Voltar
                </Link>
            </div>
            <div className='favorite-content'>
                {favorites.length > 0 ? (
                    <div className='favorite-carrousel'>
                        <Carousel weatherData={weatherData} />
                    </div>
                ) : (
                    <p className="no-favorites-message">
                        Você ainda não tem cidades favoritas.
                    </p>
                )}

                <img src={nuvensImg} alt="nuvens" />
            </div>
        </div>
    );
}
