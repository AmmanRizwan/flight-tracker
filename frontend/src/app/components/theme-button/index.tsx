import { Tooltip } from "react-tooltip";
import "./style.scss";
import { BsMap, BsMapFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleOption } from "../../store/slice/theme";
import type { RootState } from "../../store";

const ThemeButton = () => {

    const dispatch = useDispatch();
    const { toggle } = useSelector((state: RootState) => state.theme);

    return (
        <button className="theme-button" id="theme-button-id" onClick={() => dispatch(toggleOption())}>
            {
                toggle ? 
                <BsMapFill size={19} /> : 
                <>
                    <BsMap size={19} />
                    <Tooltip anchorSelect="#theme-button-id" content="Theme" place="left" />
                </>
            }
        </button>
    )
}

export default ThemeButton;