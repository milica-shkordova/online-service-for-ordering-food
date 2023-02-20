import React from "react";
import "./style.scss";

interface Props {
    img: string;
    title: string;
    info: string;
}

const ValueCircleCard: React.FC<Props> = ({ img, title, info }) => {
    return (
        <div className="valueCircleCard">
            <div className="valuePic">
                <img src={img} alt="img-value" className="circleImg" />
            </div>
            <p className="valuesTitle">{title}</p>
            <p className="valuesInfo">{info}</p>
        </div>
    );
};

export default ValueCircleCard;
