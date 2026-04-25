import { useEffect, useState } from "react";
import Map from "../../components/map";

const FlightPage = () => {
    const API = import.meta.env.VITE_API_URL as string;

    const [flight, setFlight] = useState([]);

    // useEffect(() => {
    //     const sse = new EventSource(`${API}/flight-stream`);

    //     sse.onmessage = (event) => {
    //         const data = JSON.parse(event.data);
    //         setFlight(data);
    //         console.log("New flight data received");
    //     }

    //     sse.onerror = (error) => {
    //         console.error("SSE Connection Error:", error);
    //         sse.close();
    //     }

    //     return () => {
    //         sse.close();
    //     }

    // }, []);

    console.log(flight);

    return (
        <div>
            <Map />
        </div>
    )
}

export default FlightPage;