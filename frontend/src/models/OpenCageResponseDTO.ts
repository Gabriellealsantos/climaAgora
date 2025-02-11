import { CityDTO } from "./CityDTO"
import { StausDTO } from "./StatusDTO";

export type OpenCageResponseDTO = {
    results: CityDTO[];
    status: StausDTO;
}