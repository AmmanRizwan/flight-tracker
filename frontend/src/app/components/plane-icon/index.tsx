import "./style.scss";
import L from "leaflet";
import planeIcon from "../../assets/plane.png";

const createPlaneIcon = (rotate: string) => {
    return L.divIcon({
        html: `<img src=${planeIcon} style="transform: rotate(${rotate}deg); width: 30px; height: 30px;" />`,
        className: "plane-container",
        iconSize: [20, 20],
        iconAnchor: [20, 20]
    })
}

export default createPlaneIcon;