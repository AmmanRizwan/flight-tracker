import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './style.scss';
import type { LatLngExpression } from 'leaflet';
import createPlaneIcon from '../plane-icon';
import { useEffect, useState } from 'react';

const Map = () => {
    const ATTR = import.meta.env.VITE_MAP_ATTRI;
    const URI = import.meta.env.VITE_MAP_URI;
    const API = import.meta.env.VITE_API_URL as string;
    const position: LatLngExpression = [20.5937, 78.9629];

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

    return (
        <div>
            <MapContainer 
                center={position} 
                zoom={13} 
                scrollWheelZoom={false} 
                className="map-body"
                >
            <TileLayer
                attribution={ATTR}
                url={URI}
            />
            <Marker position={position}>
                <Popup>
                    Your are here Location
                </Popup>
            </Marker>
            <Marker position={[20.5937, 79.9629]} icon={createPlaneIcon("0")}>
                <Tooltip>
                    <div>
                        Plane Detail
                    </div>
                    <div>
                        Name:
                    </div>
                    <div>
                        Country: 
                    </div>
                </Tooltip>
            </Marker>
            </MapContainer>
        </div>
    )
}

export default Map;