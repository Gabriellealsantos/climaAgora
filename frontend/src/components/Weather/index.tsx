import cluodyimg from '../../assets/Cloudy.svg'
import './styles.css';

interface Props {
    temperature: number;
    city: string;
    date: string;
}

export default function Weather({ temperature, city, date }: Props) {
    return (
        <div className="weather-content">
            <div>
                <h1 className="temperature">{Math.round(temperature)}°</h1>
            </div>
            <div className="info-container">
                <p className="city">{city}</p>
                <p className="date">{date}</p>
               
            </div>
            <div className='img-weather-content'><img src={cluodyimg} /></div>
        </div>
    );
}
