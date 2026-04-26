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
import ThemeButton from '../theme-button';
import MapThemeToggle from '../map-theme-toggle';

const Map = () => {
    
    const ATTR = import.meta.env.VITE_MAP_ATTRI;
    const API = import.meta.env.VITE_API_URL as string;
    const position: LatLngExpression = [20.5930, 78.9629];
    const { theme } = useSelector((state: RootState) => state.theme);

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

            <MapThemeToggle />

            <ThemeButton />

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
                url={theme}
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
                flight && flight.slice(0, 100).map((plane, index) => {
                    const lat = plane[6];
                    const lng = plane[5];

                    if (typeof lat !== 'number' || typeof lng !== 'number') {
                        return null;
                    }

                    const planPosition: LatLngExpression = [lat, lng];
                    return (
                            <Marker key={index} position={planPosition} icon={createPlaneIcon(plane[10] as string)}>
                            <Tooltip>
                                <div style={{ minWidth: '150px' }}>
                                    <div style={{ borderBottom: '1px solid #ccc', marginBottom: '5px', paddingBottom: '2px' }}>
                                        <strong>{plane[1] || 'Unknown Callsign'}</strong> 
                                        <span style={{ fontSize: '0.8em', color: '#666', marginLeft: '8px' }}>({plane[0]})</span>
                                    </div>
                                    
                                    <div style={{ fontSize: '0.9em', lineHeight: '1.4' }}>
                                        <b>Origin:</b> {plane[2]}<br />
                                        <b>Altitude:</b> {plane[7] ? `${plane[7]} m` : 'N/A'}<br />
                                        <b>Speed:</b> {plane[9] ? `${(plane[9] * 3.6).toFixed(0)} km/h` : '0 km/h'}<br />
                                        <b>Heading:</b> {plane[10]}°<br />
                                        <b>Status:</b> {plane[8] ? 'On Ground' : 'In Flight'}<br />
                                        <hr style={{ margin: '5px 0', border: 'none', borderTop: '1px dashed #e2e2e2' }} />
                                        <span style={{ fontSize: '1em', color: '#888' }}>
                                            Last Seen: {new Date(plane[3] * 1000).toLocaleTimeString()}
                                        </span>
                                    </div>
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