import env from "../../config/env";

const getFlights = async () => {
    const params = new URLSearchParams();
    params.append('grant_type', env.FLIGHT.CLIENT.GRANT_TYPE);
    params.append('client_id', env.FLIGHT.CLIENT.ID);
    params.append('client_secret', env.FLIGHT.CLIENT.SECRET);

    try {
        const token_data = await fetch(env.FLIGHT.TOKEN_API as string, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            body: params
        })

        if (!token_data.ok) {
            throw new Error(`'HTTPS error' status: ${token_data.status}`);
        }

        const data = await token_data.json();

        if (data) {
            const token = data.access_token; 
            const response = await fetch(`${env.FLIGHT.API}/all`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Accept": 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`HTTPS error status: ${response.status}` );
            }
            return response.json();
        }
    }
    catch (err) {
        console.error("fetching error:", err);
    }
}

export { 
    getFlights
}