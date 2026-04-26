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
    const ATTR = import.meta.env.VITE_MAP_ATTRI;
    const URI = import.meta.env.VITE_MAP_URI;
    const API = import.meta.env.VITE_API_URL as string;
    const position: LatLngExpression = [20.5930, 78.9629];

    const mapRef = useRef<L.Map | null>(null);
    const [flight, setFlight] = useState([]);

    const { position: currPos } = useSelector((state: RootState) => state.currentPosition);

    useEffect(() => {
        const sse = new EventSource(`${API}/flight-stream`);

        sse.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setFlight(data);
            console.log("New flight data received");
        }

        sse.onerror = (error) => {
            console.error("SSE Connection Error:", error);
            sse.close();
        }

        return () => {
            sse.close();
        }

    }, []);

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
                flight && flight.map((plane, index) => {
                    const lat = plane[6];
                    const lng = plane[5];

                    if (typeof lat !== 'number' || typeof lng !== 'number') {
                        return null;
                    }

                    const planPosition: LatLngExpression = [lat, lng];
                    return (
                            <Marker key={index} position={planPosition} icon={createPlaneIcon(plane[10] as string)}>
                            <Tooltip>
                                <div>
                                    Plane Detail
                                </div>
                                <div>
                                    Name: {plane[1]}
                                </div>
                                <div>
                                    Country: {plane[2]}
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