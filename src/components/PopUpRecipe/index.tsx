import React, { useCallback, useEffect, useRef, useState } from "react";
import "./style.scss";
import map from "../../assets/images/map.png";
import close from "../../assets/images/close.png";
import share from "../../assets/images/share.png";
import ReviewRecipeComment from "../ReviewRecipeComment";
import { RecipeInfo } from "../../interfaces/interfaces";
import PopUpRecipeAccordion from "../PopUpRecipeAccordion";
import { renderCuisineIcons } from "../../helpers/renderCuisineIcons";
import { renderSpicyPeppers } from "../../helpers/renderSpicyPeppers";
import { useContextList } from "../../context/ContextChefList";
import { EmailShareButton } from "react-share";
import { orderTime } from "../../constants/constants";
import useOnClickOutside from "../../hooks/useOnClickOutside";

interface Props {
    onClose: () => void;
    recipe: RecipeInfo;
}

const PopUpRecipe: React.FC<Props> = ({ recipe, onClose }) => {
    const mealInformation = [
        {
            title: "Опис на јадењето",
            info: `${recipe.meal_info}`,
        },
        {
            title: "Главни состојки",
            info: `${recipe.main_ingredients}`,
            className: "mainIngr",
        },
        {
            title: "Нутритивни вредности",
            info: `${recipe.nutrition_values}`,
            className: "nutritive",
        },
        {
            title: "Moжни алергенски појави",
            info: `${recipe.allergens}`,
            className: "alergeni",
        },
    ];

    const { chefs } = useContextList();
    const { reviews } = useContextList();
    const { recipes } = useContextList();
    const today = new Date().toISOString().split("T")[0];
    const [selectedDate, setSelectedDate] = useState<string>(today);
    const [ratingValue, setRatingValue] = useState<string>();
    const [quantity, setQuantity] = useState<number>(0);
    const popUpRef = useRef(null);
    const chefChosen = chefs.find((chef) => chef.id === recipe.chefId);

    const recipeReview = reviews.filter(
        (review) => review.recipeId === recipe.id
    );
    const moreRecipesFromChef = recipes.filter(
        (recipe) => recipe.chefId === chefChosen?.id
    );

    useEffect(() => {
        let reviewNum: any = [];
        recipeReview.forEach((review) => reviewNum.push(review.rating));
        setRatingValue(reviewNum.length);
    }, []);

    const [visibleReviews, setVisibleReviews] = useState(2);
    const [visibleRecipes, setVisibleRecipes] = useState(3);

    const showMoreReviews = () => {
        setVisibleReviews((prevValue) => prevValue + 3);
    };

    const showMoreRecipes = () => {
        setVisibleRecipes((prevValue) => prevValue + 3);
    };

    const onClickOutside = useCallback(() => {
        onClose();
    }, []);

    useOnClickOutside([popUpRef], onClickOutside);
    return (
        <div className="popUpRecipe" ref={popUpRef}>
            <div className="recipeBanner">
                <img
                    src={recipe.photo}
                    alt="chefCuisine-pic"
                    className="bannerPopUp"
                />
                <div className="icons">
                    <img
                        src={close}
                        alt="close-icon"
                        onClick={() => onClose()}
                        className="closeSign"
                    />
                    <EmailShareButton url="www.jadidomashno.com.mk">
                        <img src={share} alt="share-icon" />
                    </EmailShareButton>
                </div>
            </div>
            <div className="content">
                <div className="recipeInfo">
                    <div className="name">{recipe.recipe_name}</div>
                    <button className="msg">Прати порака</button>
                </div>
                <div className="recipeIcons">
                    <div className="dish">
                        <div className="pic">
                            {renderCuisineIcons(recipe.cuisine)}
                        </div>
                        <p className="cuisineType">{`${recipe.cuisine}`}</p>
                    </div>
                    <div className="spicy">
                        {renderSpicyPeppers(recipe.spicy)}
                        <p className="spicYType">{recipe.spicy}</p>
                    </div>
                </div>
                <div className="chefInfo">
                    <div className="chefPic">
                        <img src={chefChosen?.chef_photo} alt="chef" />
                    </div>
                    <div className="chefData">
                        <p className="chefName">{`${chefChosen?.first_name} ${chefChosen?.last_name}`}</p>
                        <div className="cuisineType">
                            {`Специјализирана по ${chefChosen?.cuisines} кујна`}
                        </div>
                        <div className="tel">{chefChosen?.phone}</div>
                        <div className="results">
                            <div className="beigeBtn">
                                <i className="fa-solid fa-star"></i>
                                <p className="rate">
                                    {`${chefChosen?.rating} (${ratingValue})`}
                                </p>
                            </div>
                            <div className="beigeBtn">
                                <p className="comments">{`${ratingValue} ${
                                    ratingValue == "1"
                                        ? "Koментар"
                                        : "Koментари"
                                }`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="chefHomePageArrow">
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
                <hr />
                <div className="dateTimeOrder">
                    <p className="titlePart">
                        Одберете датум и време на нарачка:
                    </p>
                    <div className="btns">
                        <div className="btn-choose">
                            <input
                                type="date"
                                name="date"
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setSelectedDate(event.target.value)}
                                value={selectedDate}
                            />
                        </div>

                        <select name="time" className="btn-choose">
                            <option value="">Одбери време на нарачка:</option>
                            {orderTime.map((time) => (
                                <option key={time} value={time}>
                                    {`${time} часот`}
                                </option>
                            ))}
                        </select>
                        <i className="fa-solid fa-chevron-down timeChevron"></i>
                    </div>
                </div>
                <hr />
                <div className="quantity">
                    <div className="info">
                        <p className="titlePart">Одбери количина</p>
                        <p className="availableQuantity">
                            {`Достапни ${recipe.available_portions} порции`}
                        </p>
                    </div>
                    <div className="chooseQuantity">
                        <p
                            className={`minus ${
                                quantity === 0 ? `eventDisable` : ``
                            }`}
                            onClick={() =>
                                setQuantity((prevValue) => prevValue - 1)
                            }
                        >
                            -
                        </p>
                        <p className="num">{quantity}</p>
                        <p
                            className={`plus ${
                                quantity === recipe.available_portions
                                    ? `eventDisable`
                                    : ``
                            }`}
                            onClick={() =>
                                setQuantity((prevValue) => prevValue + 1)
                            }
                        >
                            +
                        </p>
                    </div>
                </div>
                <hr />
                {recipe &&
                    mealInformation.map((meal) => (
                        <PopUpRecipeAccordion meal={meal} key={meal.title} />
                    ))}
                <div className="map">
                    <div className="info">
                        <p className="titlePart">
                            Локација за преземање на нарачка:
                        </p>
                        <p className="meters-away">300 m оддалечено од тебе</p>
                    </div>
                    <div className="mapPic">
                        <img src={map} alt="map" />
                    </div>
                </div>
                <hr />

                <div className="reviews">
                    <p className="titlePart">
                        Што кажаа другите за ‘’{recipe.recipe_name}’’
                    </p>
                    {recipeReview.slice(0, visibleReviews).map((review) => (
                        <ReviewRecipeComment key={review.id} review={review} />
                    ))}
                    {recipeReview.length > visibleReviews && (
                        <p className="viewAll" onClick={showMoreReviews}>
                            Погледни ги сите
                        </p>
                    )}
                </div>

                <div className="moreRecipes">
                    <p className="more">
                        {`
                    Повеќе од ${chefChosen?.first_name} 
                        ${chefChosen?.last_name}`}
                    </p>
                    {moreRecipesFromChef.filter((rec) => rec.id !== recipe.id)
                        .length > visibleRecipes && (
                        <p className="viewМоre" onClick={showMoreRecipes}>
                            Погледни ги сите
                        </p>
                    )}
                </div>
                <div className="listMoreRecipes">
                    {moreRecipesFromChef
                        .filter((rec) => rec.id !== recipe.id)
                        .slice(0, visibleRecipes)
                        .map((recipe) => (
                            <div className="recipeImg" key={recipe.id}>
                                <div className="pic">
                                    <img
                                        src={recipe.photo}
                                        alt="chefCuisine-pic"
                                    />
                                </div>
                                <div className="name">{recipe.recipe_name}</div>
                                <div className="price">{`${recipe.price} мкд`}</div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="addToCart">
                <p>{`Додади во кошничка - ${recipe.price * quantity} мкд`}</p>
            </div>
        </div>
    );
};

export default PopUpRecipe;
