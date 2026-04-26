import { TbScanPosition } from "react-icons/tb";
import "./style.scss";
import { Tooltip } from "react-tooltip";

const CurrentPosition = () => {
    return (
        <button className="current-location" id="current-location-id">
            <TbScanPosition size={30} />
            <Tooltip 
                anchorSelect="#current-location-id" 
                place="top" 
                content="Your Location" 
            />
        </button>
    )
}

export default CurrentPosition;