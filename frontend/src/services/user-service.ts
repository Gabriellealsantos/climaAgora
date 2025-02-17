import { requestBackend } from "../utils/requests";
import { AxiosRequestConfig } from "axios";

export function findMe() {

    const config: AxiosRequestConfig = {
        url: '/users/me',
        withCredentials: true

    }

    return requestBackend(config);
}

export function addFavorite(city: string) {

    const config: AxiosRequestConfig = {
        method: 'POST',
        url: `/users/add-favorite-city?city=${city}`,  // Cidade como query param
        withCredentials: true,
    };

    return requestBackend(config);
}
