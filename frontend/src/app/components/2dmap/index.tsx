
import { useEffect, useState } from 'react';
import { customMarkerIcon } from '../custom-marker';
import { useSelector } from 'react-redux';
import { MapContainer, Marker, Popup, Rectangle, TileLayer, Tooltip } from 'react-leaflet';

import type { RootState } from '../../store';
import type { LatLngExpression } from 'leaflet';
import type { RefObject } from 'react';

import createPlaneIcon from '../plane-icon';
import PlaneDetail from '../plane-detail';

const TwoDimMap = ({ mapRef }: { mapRef: RefObject<L.Map | null>}) => {
    const ATTR = import.meta.env.VITE_MAP_ATTRI;
    const API = import.meta.env.VITE_API_URL as string;

    const [flight, setFlight] = useState([]);
    
    const { theme } = useSelector((state: RootState) => state.theme);
    const { bound } = useSelector((state: RootState) => state.boxing);
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
                bound === null ? ( null ) : (
                    <Rectangle
                        bounds={bound}
                        pathOptions={{ color: "black" }}
                    >
                    </Rectangle>
                )
            }
            {
                flight && flight.slice(0, 1000).map((plane, index) => {
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
                                icon={createPlaneIcon(plane[10] as string)}
                                eventHandlers={{
                                    click: () => {
                                        const map = mapRef.current;
                                        if (map) {
                                            map.flyTo(planPosition, 12, { duration: 4 })
                                        }
                                    }
                                }}
                            >
                            <Tooltip>
                                <PlaneDetail plane={plane} />
                            </Tooltip>
                        </Marker>
                    )
                })
            }
            </MapContainer>
    )
}

export default TwoDimMap;