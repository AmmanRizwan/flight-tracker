import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";

const Home = () => {
    const navigate = useNavigate();

    const handleNavigateToFlight = () => {
        navigate("/flight");
        toast.success('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleNavigateToFlight}>Check Flight</button>
        </div>
    )   
}

export default Home;