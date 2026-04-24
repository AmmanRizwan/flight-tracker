import api from "../api";

const getFlights = async () => {
    const response = await api.get("/all");
    return response.data;
}

export { 
    getFlights
}