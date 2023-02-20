import React, { useRef, useState } from "react";
import "./style.scss";
import deliveryIcon from "../../assets/images/deliveryIcon.png";
import pickUpIcon from "../../assets/images/pickUpIcon.png";
import prepareTime from "../../assets/images/prepareTime.jpg";
import PopUpRecipe from "../PopUpRecipe";
import { RecipeInfo } from "../../interfaces/interfaces";
import { renderRating } from "../../helpers/renderRating";

interface Props {
    recipe: RecipeInfo;
}

const RecipeCard: React.FC<Props> = ({ recipe }) => {
    const [open, setOpen] = useState(false);
    const recipeCard = useRef(null);
    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    return (
        <>
            <div className="recipeCard">
                <div
                    className="container"
                    onClick={() => setOpen(true)}
                    ref={recipeCard}
                >
                    <div className="picture">
                        <img
                            src={recipe.photo}
                            alt="recipeImg"
                            className="recipeFoodPhoto"
                        />
                        <div className="btns">
                            {recipe.delivery ? (
                                <img src={deliveryIcon} alt="deliveryIcon" />
                            ) : (
                                <img src={pickUpIcon} alt="pickUpIcon" />
                            )}
                        </div>
                        {recipe.discount > 0 && (
                            <div className="discountIcon">
                                Промо цена <br /> -{recipe.discount}%
                            </div>
                        )}
                    </div>
                    <div className="recipeShortInfo">
                        <div className="name-price">
                            <p className="recipeName">{recipe.recipe_name}</p>
                            <p className="recipePrice">
                                {`${recipe.price} ден`}
                            </p>
                        </div>
                        <div className="recipeRate">
                            {renderRating(recipe.rate)}
                        </div>
                        <div className="ingredients">
                            <p>
                                <span>Состав на порцијата: </span>
                                {`${recipe.main_ingredients}`}
                            </p>
                        </div>
                        <div className="prepareTime">
                            <img src={prepareTime} alt="prepareTimeIcon" />
                            <span className="prepTime">{recipe.cook_time}</span>
                        </div>
                    </div>
                </div>
                <button className="addToCartBtn">Додај во кошничка</button>
                <div
                    className="heartIcon"
                    onClick={() => {
                        setIsFavorite(!isFavorite);
                    }}
                >
                    <i
                        className={`fa-${
                            isFavorite ? `solid` : `regular`
                        } fa-heart`}
                    />
                </div>
            </div>
            {open && (
                <PopUpRecipe
                    onClose={() => {
                        setOpen(false);
                    }}
                    recipe={recipe}
                />
            )}
        </>
    );
};

export default RecipeCard;
