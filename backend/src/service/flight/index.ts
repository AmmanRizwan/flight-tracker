import api from "../api";
import env from "../../config/env";

const getFlights = async () => {
    const params = new URLSearchParams();
    params.append('grant_type', env.FLIGHT.CLIENT.GRANT_TYPE);
    params.append('client_id', env.FLIGHT.CLIENT.ID);
    params.append('client_secret', env.FLIGHT.CLIENT.SECRET);

    const token_data = await api.post(env.FLIGHT.TOKEN_API, params, {
        headers: {
            "Content-Type" : "application/x-www-form-urlencoded"
        }
    });

    if (token_data) {
        const token = token_data.data.access_token;
        const response = await api.get("/all", {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": 'application/json'
            }
        });
        return response.data;
    }
}

export { 
    getFlights
}