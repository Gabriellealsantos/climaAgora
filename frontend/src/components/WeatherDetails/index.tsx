import Search from '../Search';
import warmImg from '../../assets/calor.svg';
import iceImg from '../../assets/frio.svg';
import dropImg from '../../assets/gota.svg';
import cloudyImg from '../../assets/nublado.svg';
import windImg from '../../assets/vento.svg';
import DescriptionWeather from '../DescriptionWeather';
import { WeatherResponseDTO } from '../../models/WeatherResponseDTO';
import { CityDTO } from '../../models/CityDTO';
import LoggedUser from '../LoggedUser';
import './styles.css';

interface WeatherDetailsProps {
    weather: WeatherResponseDTO;
    onCitySelect: (city: CityDTO) => void;
}

export default function WeatherDetails({ weather, onCitySelect }: WeatherDetailsProps) {

    return (
        <div className="modal">
            <div className='login-cotainer'>
                <LoggedUser />

            </div>
            <div>
                <Search onCitySelect={onCitySelect} />
            </div>

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
                <DescriptionWeather name='Vento' temp={Math.round(weather.wind.speed) + "km/h"} img={windImg} />
            </div>

            <hr />
        </div>
    );
}
