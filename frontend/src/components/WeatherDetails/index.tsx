import Search from '../Search';
import warmImg from '../../assets/calor.svg'
import iceImg from '../../assets/frio.svg'
import dropImg from '../../assets/gota.svg'
import cloudyImg from '../../assets/nublado.svg'
import windImg from '../../assets/vento.svg'
import loginImg from '../../assets/entrar.png'
import DescriptionWeather from '../DescriptionWeather';
import { Link } from 'react-router-dom';
import { WeatherResponseDTO } from '../../models/WeatherResponseDTO';
import './styles.css';

interface WeatherDetailsProps {
    weather: WeatherResponseDTO;
}

export default function WeatherDetails({ weather }: WeatherDetailsProps) {
    return (
        <div className="modal">
            <div className='login-cotainer'>
                <Link to='/login'><img src={loginImg} alt="" /></Link>
            </div>

            <Search />
            <div className='title-details'>
                <p>Detalhes do tempo...</p>
            </div>

            <div className='description-weather'>
                <p>{weather.weather[0]?.description}</p>
            </div>
            
            <div>
                <DescriptionWeather name='Temp max' temp={Math.round(weather.main.temp_max) + "°"} img={warmImg} />
                <DescriptionWeather name='Temp min' temp={Math.round(weather.main.temp_min) + "°"} img={iceImg} />
                <DescriptionWeather name='Umidade' temp={Math.round(weather.main.humidity) + "%"} img={dropImg} />
                <DescriptionWeather name='Nuvens' temp={Math.round(weather.clouds.all) + "%"} img={cloudyImg} />
                <DescriptionWeather name='Temp max' temp={Math.round(weather.wind.speed) + "km/h"} img={windImg} />
            </div>

            <hr />

        </div>
    );
}
