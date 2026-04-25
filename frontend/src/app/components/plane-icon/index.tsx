import L from "leaflet";
import planSVG from "../../../assets/plane.svg";

const planIcon = new L.Icon({
    iconUrl: planSVG,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
});

export default planIcon;