import { IoArrowBack } from "react-icons/io5";
import "./style.scss"
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/");
    }

    return (
        <button className="back-button" id="back-button-id" onClick={handleBack}>
            <IoArrowBack size={20} />
            <Tooltip
                anchorSelect="#back-button-id"
                place="bottom" 
                content="Back" 
            />
        </button>
    )
}

export default BackButton;