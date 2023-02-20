import React from "react";
import "./style.scss";

interface Props {
    img: string;
    title: string;
    explanation: string;
}

const HowToBecomeCard: React.FC<Props> = ({ img, title, explanation }) => {
    return (
        <div className="howToBecomeCard">
            <div className="picture">
                <img src={img} alt="howToBecomeChef-img" />
            </div>
            <div className="text-content">
                <p className="howToBecome-title">{title}</p>
                <p className="howToBecome-explanation">{explanation}</p>
            </div>
        </div>
    );
};

export default HowToBecomeCard;
