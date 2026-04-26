import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import './style.scss';
import type { LatLngExpression } from 'leaflet';
import createPlaneIcon from '../plane-icon';
import { useEffect, useRef, useState } from 'react';
import CurrentPosition from '../current-position';
import BackButton from '../back-button';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store';

const Map = () => {

    const planes = [
        [20.537, 78.029, "40", "Indian AIR", "India"], 
        [20.503, 78.609, "120", "Special AIR", "India"], 
        [20.337, 78.329, "320", "Unknown AIR", "India"], 
        [20.597, 78.469, "10", "NO AIR", "India"]
    ];

    const ATTR = import.meta.env.VITE_MAP_ATTRI;
    const URI = import.meta.env.VITE_MAP_URI;
    const API = import.meta.env.VITE_API_URL as string;
    const position: LatLngExpression = [20.5930, 78.9629];

    const mapRef = useRef<L.Map | null>(null);
    const [flight, setFlight] = useState([]);

    const { position: currPos } = useSelector((state: RootState) => state.currentPosition);

    console.log(currPos);

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
        <div className='map-body'>

            <CurrentPosition mapRef={mapRef} />

            <BackButton />

            <MapContainer 
                center={position} 
                zoom={5} 
                scrollWheelZoom={false} 
                className="map-container"
                ref={mapRef}
                >
            <TileLayer
                attribution={ATTR}
                url={URI}
            />
            {
                currPos === null ? (
                    <Marker position={position}>
                        <Popup>
                            Your are here Location
                        </Popup>
                    </Marker>
                ) : (
                    <Marker position={currPos}>
                        <Popup>
                            Your are here Location
                        </Popup>
                    </Marker>
                )
            }
            {
                planes.map((plane, index) => {
                    return (
                        <Marker key={index} position={[parseFloat(plane[0] as string), parseFloat(plane[1] as string)]} icon={createPlaneIcon(plane[2] as string)}>
                            <Tooltip>
                                <div>
                                    Plane Detail
                                </div>
                                <div>
                                    Name: {plane[3]}
                                </div>
                                <div>
                                    Country: {plane[4]}
                                </div>
                            </Tooltip>
                        </Marker>
                    )
                })
            }
            </MapContainer>
        </div>
    )
}

export default Map;