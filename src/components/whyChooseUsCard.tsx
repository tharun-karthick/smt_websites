import { WhyChooseUsCardProps } from "../types/whyChooseUsTypes";

const WhyChooseUsCard = ({title, description}: WhyChooseUsCardProps) => {
    return (
        <div className="wcCardWrapper">
            {/* <img className="wcImage" src={image} alt={title} /> */}
            <h2 className="wcTitle">{title}</h2>
            <p className="wcText">{description}</p>
        </div>
    )
}
export default WhyChooseUsCard;