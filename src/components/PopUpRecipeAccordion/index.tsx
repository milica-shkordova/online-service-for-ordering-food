import React, { useState } from "react";
import "./style.scss";
import { popUpRecipeAccordionInterface } from "../../interfaces/interfaces";

interface Props {
    meal: popUpRecipeAccordionInterface;
}

const PopUpRecipeAccordion: React.FC<Props> = ({ meal }) => {
    const [isActive, setIsActive] = useState(false);
    const chevron = isActive ? "fa-chevron-up" : "fa-chevron-down";

    return (
        <div className="popUpRecipeAccordion">
            <div className="dishInfo" onClick={() => setIsActive(!isActive)}>
                <p className="titlePart">{meal.title}</p>
                <i className={`fa-solid ${chevron}`}></i>
                {isActive && (
                    <div className={`dishDetailInfo ${meal.className}`}>
                        <p>{meal.info}</p>
                    </div>
                )}
            </div>
            <hr />
        </div>
    );
};

export default PopUpRecipeAccordion;
