import React from "react";
import "./style.scss";

interface Props {
    image: string;
}

const TransitionFruitLine: React.FC<Props> = ({ image }) => {
    return (
        <div className="transitionFruitLine">
            <hr className="half" />
            <div className="img">
                <img src={image} alt="transition-pic" />
            </div>
            <hr className="half" />
        </div>
    );
};

export default TransitionFruitLine;
