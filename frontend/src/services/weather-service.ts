import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";

export function findWeatherResquest(city: string) {
    const config: AxiosRequestConfig = {
        method: 'GET',
        url: '/weather/currents',
        params: {
            city,
        }
    }

    console.log("Parâmetro enviado:", city); // Verifique o nome antes da requisição
    return requestBackend(config);
}
