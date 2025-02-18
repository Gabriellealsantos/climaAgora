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
        url: `/users/favorites/${city}`,  // Cidade como PathVariable
        withCredentials: true,
    };

    return requestBackend(config);
}

export function removeFavorite(city: string) {
    const config: AxiosRequestConfig = {
        method: "DELETE",
        url: `/users/favorites/${city}`, // Agora a URL está correta
        withCredentials: true,
    };

    return requestBackend(config);
}

export function getListFavorite() {
    const config: AxiosRequestConfig = {
        method: "GET",
        url: "/users/favorites", // Corrigido para refletir a API
        withCredentials: true,
    };

    return requestBackend(config);
}