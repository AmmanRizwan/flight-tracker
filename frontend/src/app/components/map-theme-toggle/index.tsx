import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import type { RootState } from "../../../store";
import { PiMapTrifoldFill } from "react-icons/pi";
import { RiRoadMapFill } from "react-icons/ri";
import { FaMapMarked } from "react-icons/fa";
import { darkTheme, normalTheme, grayTheme } from "../../../store/slice/theme";

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
            <button className="normal-btn" onClick={handleNormalTheme}>
                <FaMapMarked size={20} />
            </button>
            <button className="dark-btn" onClick={handleDarkTheme}>
                <PiMapTrifoldFill size={20} />
            </button>
            <button className="gray-btn" onClick={handleGrayTheme}>
                <RiRoadMapFill size={20} />
            </button>
        </div>
    )
}

export default MapThemeToggle;