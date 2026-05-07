import Map, { Marker, Popup } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { CiMapPin } from "react-icons/ci";

const ThreeDimMap = () => {
    const THREE_DIM = import.meta.env.VITE_THREE_DIM_MAP_URI as string;
    
    const { position } = useSelector((state: RootState) => state.currentPosition);
    const positionArray = position as [number, number];

    return (
        <Map
        initialViewState={{
            longitude: positionArray[1],
            latitude: positionArray[0],
            zoom: 5,
        }}
        projection={"globe"}
        style={{ width: '100%', height: '100vh' }}
        mapStyle={THREE_DIM}
        >
            <Marker longitude={positionArray[1]} latitude={positionArray[0]} anchor="bottom">
                <CiMapPin size={35} color="blue"/>
            </Marker>
            <Popup longitude={positionArray[1]} latitude={positionArray[0]} anchor="top">
                You are here
            </Popup>
        </Map>
    )
}

export default ThreeDimMap;