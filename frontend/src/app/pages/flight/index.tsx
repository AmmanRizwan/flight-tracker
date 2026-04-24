import { useEffect, useState } from "react";

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
        <div>Flight Page</div>
    )
}

export default FlightPage;