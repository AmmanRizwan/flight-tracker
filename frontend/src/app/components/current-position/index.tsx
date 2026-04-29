import "./style.scss";
import { Tooltip } from "react-tooltip";
import { useDispatch } from "react-redux";
import { setPosition } from "../../store/slice/location";
import type { RefObject } from "react";
import { GiPositionMarker } from "react-icons/gi";

const CurrentPosition = ({mapRef}: {mapRef: RefObject<L.Map | null>}) => {

    const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
    }

    const dispatch = useDispatch();

    const getCoords = (): Promise<[number, number]> => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((position) => {
                resolve([position.coords.latitude, position.coords.longitude])
            },
        (error: GeolocationPositionError) => {
            reject(error);
        },
        options
    );
        })
    }

    const handleLocation = async () => {
        try {
            const pos = await getCoords();
            dispatch(setPosition(pos));
            if (mapRef.current) {
                mapRef.current?.flyTo(pos, 14, { duration: 6 });
            }
        }
        catch (err) {
            console.error(err);
        }
        
    }

    return (
        <button className="current-location" id="current-location-id" onClick={handleLocation}>
            <GiPositionMarker size={20} />
            <Tooltip 
                anchorSelect="#current-location-id" 
                place="top" 
                content="Your Location" 
            />
        </button>
    )
}

export default CurrentPosition;