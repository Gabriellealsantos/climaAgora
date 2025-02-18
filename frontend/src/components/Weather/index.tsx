import { useState, useEffect, useContext } from "react";
import cloudyImg from "../../assets/Cloudy.svg";
import * as userService from "../../services/user-service";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { ContextToken } from "../../utils/context-token";
import { toast } from "react-custom-alert"; // Importa o toast
import "./styles.css";

interface Props {
    temperature: number;
    city: string;
    date: string;
}

export default function Weather({ temperature, city, date }: Props) {
    const [isFavorite, setIsFavorite] = useState(false);
    const { contextTokenPayload } = useContext(ContextToken);
    const isLoggedIn = !!contextTokenPayload; // Verifica se o usuário está logado

    useEffect(() => {
        if (isLoggedIn) {
            userService.getListFavorite()
                .then(response => {
                    const favorites: string[] = response.data;
                    setIsFavorite(favorites.includes(city));
                })
                .catch(error => console.error("Erro ao buscar favoritos:", error));
        }
    }, [city, isLoggedIn]);

    const handleFavoriteClick = () => {
        if (!isLoggedIn) {
            // Exibe um alerta customizado com react-custom-alert
            toast.warning("Você precisa estar logado para favoritar cidades!");
            return;
        }

        if (isFavorite) {
            userService.removeFavorite(city)
                .then(() => setIsFavorite(false))
                .catch(error => {
                    console.error("Erro ao remover dos favoritos:", error);
                    toast.error("Erro ao remover dos favoritos!");
                });
        } else {
            userService.addFavorite(city)
                .then(() => setIsFavorite(true))
                .catch(error => {
                    console.error("Erro ao favoritar a cidade:", error);
                    toast.error("Erro ao favoritar a cidade!");
                });
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
                    <span className="heart">
                        <button onClick={handleFavoriteClick} className="heart-btn">
                            {isFavorite ? (
                                <FaHeart size={32} color="red" />
                            ) : (
                                <FaRegHeart size={32} />
                            )}
                        </button>
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
