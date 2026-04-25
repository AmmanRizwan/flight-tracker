import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './style.scss';
import type { LatLngExpression } from 'leaflet';

const Map = () => {
    const ATTR = import.meta.env.VITE_MAP_ATTRI;
    const URI = import.meta.env.VITE_MAP_URI;

    const position: LatLngExpression = [51.505, -0.09];

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
                    Custom Location
                </Popup>
            </Marker>
            </MapContainer>
        </div>
    )
}

export default Map;