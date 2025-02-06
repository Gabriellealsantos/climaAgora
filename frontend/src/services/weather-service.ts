import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";

export function findWeatherResquest(name: string) {
    const config: AxiosRequestConfig = {
        method: 'GET',
        url: '/weather/currents',
        params: {
            name,
        }
    }

    return requestBackend(config);
}