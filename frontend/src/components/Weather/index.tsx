import { useEffect, useState } from 'react';
import cloudyImg from '../../assets/Cloudy.svg';
import * as userService from '../../services/user-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'; // Coração contorno (Grátis)
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'; // Coração preenchido (Grátis)


interface Props {
    temperature: number;
    city: string;
    date: string;
}

export default function Weather({ temperature, city, date }: Props) {
    const [isFavorite, setIsFavorite] = useState(false);

    

    const handleFavoriteClick = () => {
        if (!isFavorite) {
            userService.addFavorite(city)
                .then(() => {
                    setIsFavorite(true);
                })
                .catch(error => console.error("Erro ao favoritar a cidade:", error));
        }
    };

    return (
        <div className="weather-content">
            <div>
                <h1 className="temperature">{Math.round(temperature)}°</h1>
            </div>
            <div className="info-container">
                <p className="city">
                    {city}
                    <span className='heart' onClick={handleFavoriteClick}>
                        <FontAwesomeIcon
                            size='2xs'
                            icon={faHeart}
                            style={{ color: isFavorite ? "red" : "white" }} // Muda a cor do ícone ao favoritar
                        />
                    </span>
                </p>
                <p className="date">{date}</p>
            </div>
            <div className="img-weather-content">
                <img src={cloudyImg} alt="Clima" />
            </div>
        </div>
    );
}
