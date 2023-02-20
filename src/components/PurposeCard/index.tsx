import React from "react";
import "./style.scss";

interface Props {
    img: string;
    title: string;
    info: string;
}

const PurposeCard: React.FC<Props> = ({ img, title, info }) => {
    return (
        <div className="purposeCard">
            <div className="purpose-img">
                <img src={img} alt="purpose-img" />
            </div>
            <p className="purpose-title">{title}</p>
            <p className="purpose-info">{info}</p>
        </div>
    );
};

export default PurposeCard;
