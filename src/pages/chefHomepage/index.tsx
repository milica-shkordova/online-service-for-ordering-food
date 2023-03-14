import React, { useCallback, useEffect, useState } from "react";
import "./style.scss";
import shareImg from "../../assets/images/share.jpg";
import home from "../../assets/images/home.jpg";
import RecipeCard from "../../components/RecipeCard";
import ReviewSimpleCommentCard from "../../components/ReviewSimpleCommentCard";
import squareArrLeft from "../../assets/images/squareArrLeft.png";
import squareArrRight from "../../assets/images/squareArrRight.png";
import WeeklyCalendar from "../../components/WeeklyCalendar";
import { useParams } from "react-router-dom";
import { useContextList } from "../../context/ContextChefList";
import { ReviewInfo } from "../../interfaces/interfaces";
import { renderCuisineIcons } from "../../helpers/renderCuisineIcons";
import { EmailShareButton, FacebookShareButton } from "react-share";
import { extendedWeekDay } from "../../constants/constants";

const ChefHomepage = () => {
    const { id } = useParams();
    const chefData = useContextList();
    const [startDay, setStartDay] = useState<Date>(new Date());
    const [selectedDayValue, setSelectedDayValue] = useState<Date>(new Date());
    const chosenChef = chefData.chefs.filter((chef) => chef.id === Number(id));
    const [chefReviews, setChefReviews] = useState<ReviewInfo[]>([]);
    const dayMeal = extendedWeekDay[selectedDayValue.getDay()];
    const [visibleRecipes, setVisibleRecipes] = useState(3);
    const [visibleReviews, setVisibleReviews] = useState(3);
    const chosenChefRecipes = chefData.recipes.filter(
        (recipes) => recipes.chefId === Number(id)
    );

    const mealType = (type: string) => {
        return chosenChefRecipes.filter((recipe) => recipe.meal_type === type);
    };

    const showMoreRecipes = () => {
        setVisibleRecipes((prevValue) => prevValue + 3);
    };

    const showMoreReviews = (type: "more" | "less") => {
        setVisibleReviews((prevValue) =>
            type === "more"
                ? chefReviews.length > visibleReviews
                    ? prevValue + 3
                    : prevValue
                : prevValue - 3
        );
    };

    const fetchReviews = useCallback(() => {
        if (chefReviews.length === 0) {
            let tmp: ReviewInfo[] = [];
            chosenChefRecipes.map((recipe) =>
                chefData.reviews
                    .filter((review) => review.recipeId === recipe.id)
                    .map((rev) => tmp.push(rev))
            );
            setChefReviews(tmp);
        }
    }, [chosenChefRecipes]);

    useEffect(() => fetchReviews(), [fetchReviews]);

    const moveCalendar = (move: "forward" | "back") => {
        const moveValue =
            move === "forward"
                ? startDay.getDate() + 7
                : startDay.getDate() - 7;
        setStartDay(new Date(startDay.setDate(moveValue)));
    };

    return (
        <div className="chefHomepage">
            <div className="chefBanner">
                <img src={chosenChef[0]?.bannerPhoto} alt="chefCuisine-pic" />
            </div>
            {chosenChef[0] && (
                <div className="chefInfo">
                    <div className="chefPhoto">
                        <img src={chosenChef[0].chef_photo} alt="chefPhoto" />
                    </div>
                    <div className="chefBio">
                        <div className="name-share">
                            <p className="chefName">{`${chosenChef[0].first_name} ${chosenChef[0].last_name}`}</p>
                            <FacebookShareButton
                                quote="За сите љубители на добра хрana!"
                                url="jadidomashno.com.mk"
                            >
                                <div className="share">
                                    <img src={shareImg} alt="share" />
                                    <span>сподели</span>
                                </div>
                            </FacebookShareButton>
                        </div>
                        <div className="cuisineInfo">
                            <div className="iconChef">
                                <p className="cuisineType">{`${chosenChef[0].cuisines} кујна`}</p>
                                <div className="cuisineImgColor">
                                    {chosenChef[0].cuisines.map((cuisine) =>
                                        renderCuisineIcons(cuisine)
                                    )}
                                </div>
                                <div className="location-distance">
                                    <img src={home} alt="house-icon" />
                                    <p> 300m</p>
                                </div>
                            </div>
                            {/* <div className="fullAddress">
                                <i className="fa-solid fa-location-dot"></i>
                                <p>Види точна адреса</p>
                            </div> */}
                        </div>
                        <div className="statisticsInfo">
                            <div className="beigeBtn">
                                <i className="fa-solid fa-star"></i>
                                <p className="rate">{chosenChef[0].rating}</p>
                            </div>
                            <div className="beigeBtn">
                                <i className="fa-solid fa-comment"></i>
                                <p className="views">38 прегледи</p>
                            </div>
                            <div className="beigeBtn">
                                <i className="fa-solid fa-bowl-rice"></i>
                                <p className="delivery">25 достави</p>
                            </div>
                        </div>
                        <p className="bio">{chosenChef[0].bio}</p>
                    </div>
                    <div className="questions">
                        <p>Имате прашања?</p>
                        <EmailShareButton url="jadidomashno.com.mk">
                            <div className="sendSms">
                                <i className="fa-solid fa-message"></i>
                                Прати порака на Готвачот
                            </div>
                        </EmailShareButton>
                    </div>
                </div>
            )}
            <p className="chooseDate">Одбери датум:</p>
            <WeeklyCalendar
                startDay={startDay}
                moveCalendar={(move: "forward" | "back") => moveCalendar(move)}
                selectedDayValue={(selectedDayValue: Date) =>
                    setSelectedDayValue(selectedDayValue)
                }
            />
            <div className="recipesList">
                <div className="available">
                    <p className="meals">{`ДОСТАПНИ ЈАДЕЊА ЗА ${dayMeal}`}</p>
                    {mealType("главно јадење")
                        .slice(0, visibleRecipes)
                        .map((recipe) => (
                            <RecipeCard
                                key={`main-${recipe.id}`}
                                recipe={recipe}
                            />
                        ))}

                    {mealType("главно јадење").length > visibleRecipes && (
                        <button
                            onClick={showMoreRecipes}
                            className="showMoreBtn"
                        >
                            Покажи повеќе
                        </button>
                    )}
                </div>
                <div className="availableSideMeals">
                    {mealType("предјадење").length > 0 && (
                        <>
                            <p className="sideMeals">
                                {`ПРЕДЛОГ ДОДАТОЦИ КОН ЈАДЕЊАТА ЗА ${dayMeal}`}
                            </p>
                            {mealType("предјадење").map((recipe) => (
                                <RecipeCard
                                    key={`side-${recipe.id}`}
                                    recipe={recipe}
                                />
                            ))}
                        </>
                    )}
                </div>
                <div className="availableDesserts">
                    {mealType("десерт").length > 0 && (
                        <>
                            <p className="desserts">
                                {`ПРЕДЛОГ ДЕСЕРТИ ЗА ${dayMeal}`}
                            </p>
                            {mealType("десерт").map((recipe) => (
                                <RecipeCard
                                    key={`desert-${recipe.id}`}
                                    recipe={recipe}
                                />
                            ))}
                        </>
                    )}
                </div>
                {chefReviews.length > 0 && (
                    <div className="recommendations">
                        <p className="recommendation">
                            ПРЕПОРАКИ ЗА ЈАДЕЊАТА НА ГОТВАЧОТ ОД ПРЕТХОДНИ
                            КОРИСНИЦИ ({chefReviews.length})
                        </p>
                        {chefReviews
                            .slice(
                                visibleReviews === 3 ? 0 : visibleReviews - 3,
                                visibleReviews
                            )
                            .map((review) => (
                                <ReviewSimpleCommentCard
                                    key={`recommendations-${review.id}`}
                                    review={review}
                                />
                            ))}
                        <div className="recommendationArrows">
                            <div className="arrows">
                                <img
                                    src={squareArrLeft}
                                    alt="squareArrLeft"
                                    onClick={() => showMoreReviews("less")}
                                    className={`${
                                        visibleReviews === 3 ||
                                        visibleReviews < 3
                                            ? `eventDisable`
                                            : ``
                                    }`}
                                />
                                <img
                                    src={squareArrRight}
                                    alt="squareArrRight"
                                    onClick={() => showMoreReviews("more")}
                                    className={`${
                                        chefReviews.length < visibleReviews
                                            ? `eventDisable`
                                            : ``
                                    }`}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChefHomepage;
