import { WhyChooseUsCardProps } from "../types/componetTypes";

const WhyChooseUsCard = ({icon, title, description}: WhyChooseUsCardProps) => {
    return (
        <div className="wcCardWrapper">
            <div className="wcIconWrapper">{icon}</div>
            <h2 className="wcTitle">{title}</h2>
            <p className="wcText">{description}</p>
        </div>
    )
}
export default WhyChooseUsCard;