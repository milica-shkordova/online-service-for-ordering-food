import React, { useState } from "react";
import "./style.scss";

interface Props {
    title: string;
    content: string;
}

const AccordionCard: React.FC<Props> = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
    const arrowToggle = isActive ? "fa-arrow-up" : "fa-arrow-down";

    return (
        <div className="accordionCard">
            <div
                className="accordion-item"
                onClick={() => setIsActive(!isActive)}
            >
                <div className="accordion-title">
                    <p className="title">{title}</p>
                    <div className="icon">
                        <i className={`fa-solid ${arrowToggle}`} />
                    </div>
                </div>
                {isActive && <div className="accordion-content">{content}</div>}
            </div>
        </div>
    );
};

export default AccordionCard;
