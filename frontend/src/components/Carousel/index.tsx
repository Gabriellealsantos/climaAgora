import GlassCard from '../../components/GlassCard';  // Seus cards
import { WeatherResponseDTO } from '../../models/WeatherResponseDTO';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./styles.css";

const Carousel = ({ weatherData }: { weatherData: WeatherResponseDTO[] }) => {
    const isSingleSlide = weatherData.length === 1;

    const settings = {
        dots: true,
        slidesToShow: isSingleSlide ? 1 : 3, // Garante que apenas 1 slide seja mostrado se houver apenas 1 cidade
        slidesToScroll: 1,
        infinite: !isSingleSlide, // Se houver apenas 1 slide, desativa o loop infinito
        centerMode: !isSingleSlide, // Se houver apenas 1 slide, desativa o efeito de centralização
        focusOnSelect: true,
        draggable: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: isSingleSlide ? 1 : 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: isSingleSlide ? 1 : 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {weatherData.map((weather, index) => (
                <div key={index}>
                    <GlassCard weather={weather} />
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;
