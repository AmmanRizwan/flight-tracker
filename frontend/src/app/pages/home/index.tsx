import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => navigate("/flight")}>Check Flight</button>    
        </div>
    )   
}

export default Home;