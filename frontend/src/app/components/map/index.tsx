import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import './style.scss';
import { useRef } from 'react';
import CurrentPosition from '../current-position';
import BackButton from '../back-button';
import ThemeButton from '../theme-button';
import MapThemeToggle from '../map-theme-toggle';
import MapSwitch from '../map-switch';
import TwoDimMap from "../2dmap";
import ThreeDimMap from "../3dmap";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

const Map = () => {
    const mapRef = useRef<L.Map | null>(null);
    const { toggle } = useSelector((state: RootState) => state.mapToggle);

    return (
        <div className='map-body'>

            <MapThemeToggle />

            <ThemeButton />

            <CurrentPosition mapRef={mapRef} />

            <BackButton />

            <MapSwitch />
            
            {
                toggle ? (
                    <ThreeDimMap />
                ) : (                 
                    <TwoDimMap mapRef={mapRef} />
                )
            }
        </div>
    )
}

export default Map;