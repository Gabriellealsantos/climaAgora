import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";

export function findWeatherResquest(city = "Sapeaçu") {
    const config: AxiosRequestConfig = {
        method: 'GET',
        url: '/weather/currents',
        params: {
            city,
        }
    }
    return requestBackend(config);
}
