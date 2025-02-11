import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";

export function query(query: string) {
    const config: AxiosRequestConfig = {
        method: 'GET',
        url: '/geocode/cities',
        params: {
            query
        }
    }
    return requestBackend(config);
}
