import './styles.css';

interface Props {
    name : string,
    temp : string,
    img : string
}

export default function DescriptionWeather({name, temp, img} : Props) {
    return (
        <div>
            <div className='description-weather-content'>
                <div className='description-weather-details'>
                    <p>{name}</p>
                    <p className='temp-description-weather'>{temp}</p>
                    <img src={img} alt="Warm" />
                </div>
            </div>
        </div>
    );
}
