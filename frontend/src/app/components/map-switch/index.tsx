import { BsBadge3D, BsPinMap } from "react-icons/bs";
import "./style.scss";
import { Tooltip } from "react-tooltip";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { toggleMap } from "../../store/slice/togglemap";

const MapSwitch = () => {

    const dispatch = useDispatch();
    const { toggle } = useSelector((state: RootState) => state.mapToggle);

    const handleToggle = () => {
        dispatch(toggleMap());
    }

    return (
        <button className="map-switch-btn" id="map-switch-id" onClick={handleToggle}>
            {
                toggle ? (
                    <BsPinMap />
                ) : (
                    <BsBadge3D size={20} />
                )
            }
            <Tooltip
                anchorSelect="#map-switch-id"
                place="top"
                content={toggle ? "2D Map" : "3D Map"}
            />
        </button>
    )
}

export default MapSwitch;