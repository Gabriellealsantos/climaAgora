import Search from '../Search';
import warmImg from '../../assets/calor.svg'
import iceImg from '../../assets/frio.svg'
import dropImg from '../../assets/gota.svg'
import cloudyImg from '../../assets/nublado.svg'
import windImg from '../../assets/vento.svg'
import snowImg from '../../assets/outline.svg'
import DescriptionWeather from '../DescriptionWeather';
import './styles.css';

export default function WeatherDetails() {
    return (
        <div className="modal">
            <Search />
            <div className='title-details'>
                <p>Detalhes do tempo...</p>
            </div>

            <div className='description-weather'>
                <p>trovoada com leve garoa</p>
            </div>

            <div>
                <DescriptionWeather name='Temp max' temp='19°' img={warmImg} />
                <DescriptionWeather name='Temp min' temp='15°' img={iceImg} />
                <DescriptionWeather name='Umidade' temp='58%' img={dropImg} />
                <DescriptionWeather name='Temp max' temp='86%' img={cloudyImg} />
                <DescriptionWeather name='Temp max' temp='5km/h' img={windImg} />
            </div>

            <hr />

            <div className='title-details'>
                <p>Previsão do tempo para hoje...</p>
            </div>

            <div className="weather-info">
                <img src={snowImg} alt="Ícone de Neve" />
                <span className="time">
                    09:00
                    <p>Neve</p>
                </span>
                <span className="temperature-details">19°</span>

            </div>



        </div>
    );
}
