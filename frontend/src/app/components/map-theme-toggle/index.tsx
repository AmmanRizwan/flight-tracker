import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import type { RootState } from "../../../store";
import { PiMapTrifoldFill } from "react-icons/pi";
import { RiRoadMapFill } from "react-icons/ri";
import { FaMapMarked } from "react-icons/fa";
import { darkTheme, normalTheme, grayTheme } from "../../../store/slice/theme";
import { Tooltip } from "react-tooltip";

const MapThemeToggle = () => {

    const dispatch = useDispatch();
    const { toggle } = useSelector((state: RootState) => state.theme);

    const handleNormalTheme = () => {
        dispatch(normalTheme());
    }

    const handleDarkTheme = () => {
        dispatch(darkTheme());
    }

    const handleGrayTheme = () => {
        dispatch(grayTheme());
    }

    return (
        <div className={`theme-toggle-btn ${toggle ? "" : "hide-toggle-btn"}`}>
            <button className="normal-btn" id="normal-theme" onClick={handleNormalTheme}>
                <FaMapMarked size={20} />
                <Tooltip 
                    anchorSelect="#normal-theme"
                    content="Caro"
                    place="top"
                />
            </button>
            <button className="dark-btn" id="dark-theme" onClick={handleDarkTheme}>
                <PiMapTrifoldFill size={20} />
                <Tooltip
                    anchorSelect="#dark-theme"
                    content="Humanitarian"
                    place="right"
                />
            </button>
            <button className="gray-btn" id="gray-theme" onClick={handleGrayTheme}>
                <RiRoadMapFill size={20} />
                <Tooltip
                    anchorSelect="#gray-theme"
                    content="Esri World Imagery"
                    place="left"
                />
            </button>
        </div>
    )
}

export default MapThemeToggle;