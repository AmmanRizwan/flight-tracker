import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleNavigateToFlight = () => {
        navigate("/flight");
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleNavigateToFlight}>Check Flight</button>
        </div>
    )   
}

export default Home;