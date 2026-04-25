import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './style.scss';
import type { LatLngExpression } from 'leaflet';
import planIcon from '../plane-icon';

const Map = () => {
    const ATTR = import.meta.env.VITE_MAP_ATTRI;
    const URI = import.meta.env.VITE_MAP_URI;

    const position: LatLngExpression = [20.5937, 78.9629];

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
            <Marker position={[20.5937, 79.9629]} icon={planIcon}>
                <Tooltip>
                    Tooltip for plain
                </Tooltip>
                <Popup>
                    Flight AI-101 is currently over India.<br/> Flight AI-200
                </Popup>
            </Marker>
            </MapContainer>
        </div>
    )
}

export default Map;