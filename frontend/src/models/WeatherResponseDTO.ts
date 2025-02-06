import { CoordDTO } from "./CoordDTO";
import { WeatherDTO } from "./WeatherDTO";
import { MainDTO } from "./MainDTO";
import { WindDTO } from "./WindDTO";
import { CloudsDTO } from "./CloudsDTO";
import { SysDTO } from "./SysDTO";

export interface WeatherResponseDTO {
    coord: CoordDTO;
    weather: WeatherDTO[];
    base: string;
    main: MainDTO;
    visibility: number;
    wind: WindDTO;
    clouds: CloudsDTO;
    dt: number;
    sys: SysDTO;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}
