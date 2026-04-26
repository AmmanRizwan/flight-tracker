import { Tooltip } from "react-tooltip";
import "./style.scss";
import { BsMap } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleOption } from "../../../store/slice/theme";

const ThemeButton = () => {

    const dispatch = useDispatch();

    return (
        <button className="theme-button" id="theme-button-id" onClick={() => dispatch(toggleOption())}>
            <BsMap size={19} />
            <Tooltip anchorSelect="#theme-button-id" content="Theme" place="left" />
        </button>
    )
}

export default ThemeButton;