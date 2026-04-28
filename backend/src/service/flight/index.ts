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
                'Accept': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept-Encoding': 'gzip'
            },
            body: params
        })

        if (!token_data.ok) {
            throw new Error(`'HTTPS error' status: ${token_data.status}`);
        }

        const data = await token_data.json();

        if (data) {
            const token = data.access_token; 
            const response = await fetch(`${env.FLIGHT.API}/all`
                , {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                    "Authorization": `Bearer ${token}`,
                    "Accept": 'application/json'
                }
            }
        );
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