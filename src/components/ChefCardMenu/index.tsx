import React, { useState } from "react";
import "./style.scss";
import houseicon from "../../assets/images/house.png";
import cart from "../../assets/images/cart.png";
import delivery from "../../assets/images/delivery.jpg";
import pickUp from "../../assets/images/pickUp.jpg";
import { RecipeInfo } from "../../interfaces/interfaces";
import { useContextList } from "../../context/ContextChefList";
import PopUpRecipe from "../PopUpRecipe";
import badge from "../../assets/images/badge.png";
import { renderRating } from "../../helpers/renderRating";

interface Props {
    recipe: RecipeInfo;
}

const ChefCardMenu: React.FC<Props> = ({ recipe }) => {
    const { chefs } = useContextList();
    const chosenChefRecipes = chefs.find((chef) => chef.id === recipe.chefId);
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="chefCardMenu" onClick={() => setOpen(true)}>
                <div className="container">
                    <div className="picture-part">
                        <img
                            src={recipe.photo}
                            alt="main-img"
                            className="recipeImg"
                        />
                        <div className="icon">
                            {recipe.delivery === "достава" ? (
                                <img src={delivery} alt="delivery-img" />
                            ) : (
                                <img src={pickUp} alt="pickUp-img" />
                            )}
                        </div>
                        {chosenChefRecipes?.rating == 5 && (
                            <div className="badgeIcon">
                                <img
                                    src={badge}
                                    alt="badge"
                                    className="badge"
                                />
                            </div>
                        )}
                    </div>
                    <div className="info-part">
                        <div className="byChef">
                            <img
                                src={chosenChefRecipes?.chef_photo}
                                alt="byChef-pic"
                            />
                        </div>
                        <div className="content">
                            <div className="recipeInfo">
                                <p className="recipeName">
                                    {recipe.recipe_name}
                                </p>
                                <p className="recipePrice">
                                    {`${recipe.price} ден`}
                                </p>
                            </div>
                            <div className="reviews-stars">
                                {renderRating(recipe.rate)}
                            </div>
                            <div className="moreInfo">
                                <div className="location-distance">
                                    <img src={houseicon} alt="house-icon" />
                                    <p> - 300m</p>
                                </div>
                                <button className="btn-addToCart">
                                    Во кошничка{" "}
                                    <img src={cart} alt="cart-icon" />
                                </button>
                            </div>
                        </div>
                    </div>
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

export default ChefCardMenu;
