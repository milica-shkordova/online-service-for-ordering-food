import React from "react";
import "./style.scss";

interface Props {
    img: string;
    step: string;
}

const CriterionCard: React.FC<Props> = ({ img, step }) => {
    return (
        <div className="criterionCard">
            <div className="picture">
                <img src={img} alt="step-img" />
            </div>
            <p className="steps">{step}</p>
        </div>
    );
};

export default CriterionCard;
