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
import type { RootState } from '../../store';
import ThemeButton from '../theme-button';
import MapThemeToggle from '../map-theme-toggle';
import PlaneDetail from '../plane-detail';
import { customMarkerIcon } from '../custom-marker';

const Map = () => {
    
    const ATTR = import.meta.env.VITE_MAP_ATTRI;
    const API = import.meta.env.VITE_API_URL as string;
    const { theme } = useSelector((state: RootState) => state.theme);

    const mapRef = useRef<L.Map | null>(null);
    const [flight, setFlight] = useState([]);

    const { position } = useSelector((state: RootState) => state.currentPosition);

    useEffect(() => {
        const sse = new EventSource(`${API}/flight-stream`);

        sse.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setFlight(data);
        }

        sse.onerror = () => {
            sse.close();
        }

        return () => {
            sse.close();
        }

    }, [API]);

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
            <Marker position={position} icon={customMarkerIcon}>
                <Popup>
                    Your are here Location
                </Popup>
            </Marker>
            {
                flight && flight.slice(0, 100).map((plane, index) => {
                    const lat = plane[6];
                    const lng = plane[5];

                    if (typeof lat !== 'number' || typeof lng !== 'number') {
                        return null;
                    }

                    const planPosition: LatLngExpression = [lat, lng];
                    return (
                            <Marker 
                                key={index} 
                                position={planPosition} 
                                icon={createPlaneIcon(plane[10] as string)}>
                            <Tooltip>
                                <PlaneDetail plane={plane} />
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