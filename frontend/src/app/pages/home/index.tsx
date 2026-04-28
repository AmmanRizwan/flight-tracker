import { useNavigate } from "react-router-dom";
import PlaneBackground from "../../../assets/flight-background.jpg";
import "./home.scss";
import type { IFeatureCard } from "../../interface";
import FeatureCard from "../../components/feature-card";

const data: IFeatureCard[] = [
    {
        id: 1,
        icon: "https://cdn-icons-png.flaticon.com/512/8134/8134438.png",
        className: "flight-path-icon",
        title: "Interactive Map",
        description: "View live flight positions on a responsive map with real-time updates"
    },
    {
        id: 2,
        icon: "https://freesvg.org/img/Map-Pin.png",
        className: "location-pin",
        title: "Precise Location",
        description: "Track aircraft coordinates with high precision and accuracy"
    },
    {
        id: 3,
        icon: "https://img.freepik.com/free-vector/location-flight-path_78370-4279.jpg?semt=ais_hybrid&w=740&q=80",
        className: "plane-info",
        title: "Flight Details",
        description: "Get comprehensive information about each flight in the airspace"
    },
    {
        id: 4,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFqE0XjumIZErWXjgrcjs93MKHbygB2fRnvw&s",
        className: "live-update-icon",
        title: "Live Updates",
        description: "Automatic real-time updates to keep you informed instantly"
    }
]

const Home = () => {
    const navigate = useNavigate();

    const handleNavigateToFlight = () => {
        navigate("/open-playground");
    }

    return (
        <div className="home-container plane-bg" style={{ backgroundImage: `url(${PlaneBackground})` }}>
            <nav className="navbar">
                <div className="nav-content">
                    <h1 className="logo">✈️ Flight Tracker</h1>
                </div>
            </nav>

            <main className="home-content">
                <section className="hero">
                    <h2 className="hero-title">Track Flights in Real-Time</h2>
                    <p className="hero-subtitle">
                        Monitor aircraft locations, flight paths, and detailed information
                        across the globe with our interactive flight tracking system.
                    </p>
                    <button className="cta-button" onClick={handleNavigateToFlight}>
                        Open Playground
                    </button>
                </section>

                <section className="features">
                    <div className="features-grid">
                        {
                            data.map((card: IFeatureCard, index: number) => {
                                return (
                                    <FeatureCard key={index} card={card} />
                                )
                            })
                        }
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>&copy; 2026 Flight Tracker. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Home;