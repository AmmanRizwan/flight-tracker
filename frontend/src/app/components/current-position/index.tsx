import "./style.scss";
import { Tooltip } from "react-tooltip";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store";
import { setPosition } from "../../../store/slice/location";
import type { RefObject } from "react";
import { GiPositionMarker } from "react-icons/gi";

const CurrentPosition = ({mapRef}: {mapRef: RefObject<L.Map | null>}) => {

    const dispatch = useDispatch();
    const { position } = useSelector((state: RootState) => state.currentPosition);

    const handleLocation = () => {
        if (!navigator.geolocation) {
            dispatch(setPosition(null));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                if (mapRef.current) {
                    dispatch(setPosition([pos.coords.latitude, pos.coords.longitude]));
                    if (position !== null) {
                            mapRef.current.locate();
                            mapRef.current?.flyTo(position, 14, { duration: 2 });
                        }
                }
            },
            (err) => {
                console.error(err);
                dispatch(setPosition(null));
            }
        )
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