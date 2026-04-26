import { Bounce, ToastContainer } from "react-toastify";
import Map from "../../components/map";
const FlightPage = () => {
    return (
        <div>
            <Map />
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
        </div>
    )
}

export default FlightPage;