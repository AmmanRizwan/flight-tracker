import axios from "axios";
import env from "../config/env";

const api = axios.create({
    baseURL: env.FLIGHT.API
});

api.interceptors.response.use((response) => response, (error) => {
    if (error.response.status === 401) {
        throw new Error("API limit is end!");
    }

    return Promise.reject(error);
})

export default api;