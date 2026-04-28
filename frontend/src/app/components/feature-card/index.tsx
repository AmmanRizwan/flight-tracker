import type { IFeatureCard } from "../../interface";
import "./style.scss";

const FeatureCard = ({ card }: { card: IFeatureCard }) => {
    return (
        <div className="feature-card">
            <div className="feature-icon">
                <img src={card.icon} className={card.className} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
        </div>
    )
}

export default FeatureCard;