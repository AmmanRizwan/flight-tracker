import "./style.scss";
import { Tooltip } from "react-tooltip";
import { useDispatch } from "react-redux";
import { setPosition } from "../../store/slice/location";
import type { RefObject } from "react";
import { GiPositionMarker } from "react-icons/gi";

const CurrentPosition = ({mapRef}: {mapRef: RefObject<L.Map | null>}) => {

    const dispatch = useDispatch();

    const handleLocation = async () => {
        try {
            if (mapRef.current) {
                mapRef.current.once("locationfound", (e) => {
                    const { lat, lng } = e.latlng;
                    dispatch(setPosition([lat, lng]));
                    mapRef.current?.flyTo([lat, lng], 14, { duration: 6 });
                })
                mapRef.current.once("locationerror", () => {
                    alert("Location Access denied.");
                })
                mapRef.current.locate({ setView: false });
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