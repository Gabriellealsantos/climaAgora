import BackgroundImage from "../../components/BackgroundImage";
import Weather from "../../components/Weather";
import WeatherDetails from "../../components/WeatherDetails";

export default function Home() {
    return (

        <BackgroundImage>
            <div className="home-container">
                <Weather
                    temperature={16}
                    city="Londres"
                    date="06:09 - Segunda-feira, 9 Set ‘23"
                />
            </div>



        </BackgroundImage>

    );
}