import React, { useEffect, useState } from "react";
import "./style.scss";
import Title from "../../components/Title";
import { menuFoodIcons } from "../../constants/constants";
import Slider from "@mui/material/Slider";
import delivery from "../../assets/images/delivery.jpg";
import pickUp from "../../assets/images/pickUp.jpg";
import ChefCardMenu from "../../components/ChefCardMenu";
import { useContextList } from "../../context/ContextChefList";
import { RecipeInfo } from "../../interfaces/interfaces";
import { renderRating } from "../../helpers/renderRating";
import arrowDown from "../../assets/images/arrowDown.png";
import { useParams } from "react-router-dom";

type RatingType = 3 | 4 | 5;
type DeliveryType = "подигање" | "достава";
type AvailableMealType = "денес" | "утре" | "по нарачка";

const Meni = () => {
    const { recipes } = useContextList();
    const { chefs } = useContextList();
    const { address } = useParams();
    const [visibleRecipes, setVisibleRecipes] = useState(6);
    const [filteredRecipes, setFilteredRecipes] = useState<RecipeInfo[]>([]);
    const [selectedPrice, setSelectedPrice] = useState<number>(0);
    const [selectedRating, setSelectedRating] = useState<RatingType>(3);
    const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
    const [selectedDelivery, setSelectedDelivery] =
        useState<DeliveryType>("достава");
    const [selectedMealAvailable, setSelectedMealAvailable] =
        useState<AvailableMealType>("денес");
    const [chosenAddress, setChosenAddress] = useState<string>("");

    const allAllergens: string[] = [
        ...new Set(
            recipes
                .reduce((c: string[], v) => c.concat(v.allergens), [])
                .map((o) => o)
        ),
    ];

    const chefAddresses: string[] = [
        ...new Set(
            chefs
                .reduce((c: string[], v) => c.concat(v.address), [])
                .map((o) => o)
        ),
    ];

    const showMoreItems = () => {
        setVisibleRecipes((prevValue) => prevValue + 6);
    };

    useEffect(() => {
        if (filteredRecipes.length === 0) {
            setFilteredRecipes(recipes);
        }
    }, [recipes]);

    const handleFilterHeaderIcons = (filterIcon: string) => {
        setFilteredRecipes(
            recipes.filter((recipe) => recipe.icon_type === filterIcon)
        );
    };

    const handleFilterAllergens = (allergensFilter: string) => {
        if (!selectedAllergens.includes(allergensFilter)) {
            setSelectedAllergens([...selectedAllergens, allergensFilter]);
        } else {
            setSelectedAllergens(
                selectedAllergens.filter(
                    (selected) => selected !== allergensFilter
                )
            );
        }
    };

    const handleFilterMenu = () => {
        setVisibleRecipes(6);
        const defaultFilter = recipes.filter(
            (recipe) =>
                recipe.delivery === selectedDelivery &&
                recipe.rate >= selectedRating &&
                recipe.available.includes(selectedMealAvailable)
        );
        const chosenLocation = chefs.filter(
            (chef) => chef.address === chosenAddress
        );

        if (
            selectedPrice > 0 &&
            selectedAllergens.length > 0 &&
            chosenAddress.length > 0
        ) {
            setFilteredRecipes(
                defaultFilter.filter(
                    (defaultRecipe) =>
                        defaultRecipe.price <= selectedPrice &&
                        defaultRecipe.allergens.some(
                            (r) => selectedAllergens.indexOf(r) >= 0
                        ) &&
                        chosenLocation.filter(
                            (chosenChefLocation) =>
                                chosenChefLocation.id === defaultRecipe.chefId
                        ).length > 0
                )
            );
        } else if (
            selectedPrice === 0 &&
            selectedAllergens.length > 0 &&
            chosenAddress.length > 0
        ) {
            setFilteredRecipes(
                defaultFilter.filter(
                    (defaultRecipe) =>
                        defaultRecipe.allergens.some(
                            (r) => selectedAllergens.indexOf(r) >= 0
                        ) &&
                        chosenLocation.filter(
                            (chosenChefLocation) =>
                                chosenChefLocation.id === defaultRecipe.chefId
                        ).length > 0
                )
            );
        } else if (
            selectedPrice > 0 &&
            selectedAllergens.length === 0 &&
            chosenAddress.length > 0
        ) {
            setFilteredRecipes(
                defaultFilter.filter(
                    (defaultRecipe) =>
                        defaultRecipe.price <= selectedPrice &&
                        chosenLocation.filter(
                            (chosenChefLocation) =>
                                chosenChefLocation.id === defaultRecipe.chefId
                        ).length > 0
                )
            );
        } else if (
            selectedPrice > 0 &&
            selectedAllergens.length > 0 &&
            chosenAddress.length === 0
        ) {
            setFilteredRecipes(
                defaultFilter.filter(
                    (defaultRecipe) =>
                        defaultRecipe.price <= selectedPrice &&
                        defaultRecipe.allergens.some(
                            (r) => selectedAllergens.indexOf(r) >= 0
                        )
                )
            );
        } else if (
            selectedPrice === 0 &&
            selectedAllergens.length === 0 &&
            chosenAddress.length > 0
        ) {
            setFilteredRecipes(
                defaultFilter.filter(
                    (defaultRecipe) =>
                        chosenLocation.filter(
                            (chosenChefLocation) =>
                                chosenChefLocation.id === defaultRecipe.chefId
                        ).length > 0
                )
            );
        } else if (
            selectedPrice === 0 &&
            selectedAllergens.length > 0 &&
            chosenAddress.length === 0
        ) {
            setFilteredRecipes(
                defaultFilter.filter((defaultRecipe) =>
                    defaultRecipe.allergens.some(
                        (r) => selectedAllergens.indexOf(r) >= 0
                    )
                )
            );
        } else if (
            selectedPrice > 0 &&
            selectedAllergens.length === 0 &&
            chosenAddress.length === 0
        ) {
            setFilteredRecipes(
                defaultFilter.filter(
                    (defaultRecipe) => defaultRecipe.price <= selectedPrice
                )
            );
        } else {
            setFilteredRecipes(defaultFilter);
        }
    };

    useEffect(() => {
        handleFilterMenu();
    }, [
        selectedPrice,
        selectedAllergens,
        selectedDelivery,
        selectedMealAvailable,
        selectedRating,
        chosenAddress,
    ]);

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setChosenAddress(value);
    };

    return (
        <div className="menu">
            <Title title="Мени" />
            <div className="calendar"></div>
            <div className="chooseMealType">
                {/* <i className="fa-solid fa-circle-chevron-left"></i> */}
                <div className="menuChoice">
                    {menuFoodIcons.map((menuIcon) => (
                        <div
                            className="menu-part"
                            key={menuIcon.alt}
                            onClick={() =>
                                handleFilterHeaderIcons(menuIcon.meal)
                            }
                        >
                            <div className="menu-img">
                                <img
                                    src={menuIcon.img}
                                    alt={`${menuIcon.img}-icon}`}
                                />
                            </div>
                            <p className="meal">{menuIcon.meal}</p>
                        </div>
                    ))}
                </div>
                {/* <i className="fa-solid fa-circle-chevron-right"></i> */}
            </div>
            <div className="menu-preview">
                <div className="filters">
                    <select
                        name="selectArtist"
                        className="address"
                        onChange={selectChange}
                    >
                        <option value={address ? address : ""}>
                            {address ? address : "Локација"}
                        </option>
                        {chefAddresses.map((chefAddress) => (
                            <option
                                key={`${chefAddress}-menu}`}
                                value={chefAddress}
                            >
                                {chefAddress}
                            </option>
                        ))}
                    </select>
                    <div className="arrowDown">
                        <img src={arrowDown} alt="arrowDown" />
                    </div>
                    <div className="availability">
                        <div className="available-now">
                            <label htmlFor="now">Достапно веднаш</label>
                            <input
                                type="radio"
                                id="now"
                                name="availability"
                                onClick={() =>
                                    setSelectedMealAvailable("денес")
                                }
                                defaultChecked={
                                    selectedMealAvailable === "денес"
                                }
                            />
                        </div>
                        <div className="available-tomorrow">
                            <label htmlFor="tomorrow">Достапно утре</label>
                            <input
                                type="radio"
                                id="tomorrow"
                                name="availability"
                                onClick={() => setSelectedMealAvailable("утре")}
                                defaultChecked={
                                    selectedMealAvailable === "утре"
                                }
                            />
                        </div>
                        <div className="available-afterOrder">
                            <label htmlFor="afterOrder">
                                Достапно по нарачка
                            </label>
                            <input
                                type="radio"
                                id="afterOrder"
                                name="availability"
                                onClick={() =>
                                    setSelectedMealAvailable("по нарачка")
                                }
                                defaultChecked={
                                    selectedMealAvailable === "по нарачка"
                                }
                            />
                        </div>
                    </div>
                    <hr />
                    <div className="priceFilter">
                        <p className="price">Филтрирај по цена:</p>
                        <Slider
                            defaultValue={50}
                            step={10}
                            min={100}
                            max={999}
                            aria-label="Default"
                            valueLabelDisplay="auto"
                            className="slider"
                            onChange={(e: Event) =>
                                setSelectedPrice(
                                    Number((e.target as HTMLInputElement).value)
                                )
                            }
                        />
                        <div className="priceRange">
                            <span>100 ден</span>
                            <span>999 ден</span>
                        </div>
                    </div>
                    <hr />
                    <div className="alergensFilter">
                        <p className="alergeni">Алергени:</p>
                        {allAllergens.map((allergen) => (
                            <button
                                className={`alergen ${
                                    selectedAllergens.includes(allergen) &&
                                    "active"
                                }`}
                                key={allergen}
                                onClick={() => {
                                    handleFilterAllergens(allergen);
                                }}
                            >
                                {allergen}
                            </button>
                        ))}
                    </div>
                    <hr />
                    <div className="ratingFilter">
                        <p className="rate">Покажи по рејтинг:</p>
                        <div className="starsFilter">
                            <div className="stars">{renderRating(3)}</div>
                            <div className="rating-input">
                                <label htmlFor="3+">3+</label>
                                <input
                                    type="radio"
                                    id="3+"
                                    name="rate"
                                    onClick={() => setSelectedRating(3)}
                                    defaultChecked={selectedRating === 3}
                                />
                            </div>
                        </div>
                        <div className="starsFilter">
                            <div className="stars">{renderRating(4)}</div>
                            <div className="rating-input">
                                <label htmlFor="4+">4+</label>
                                <input
                                    type="radio"
                                    id="4+"
                                    name="rate"
                                    onClick={() => setSelectedRating(4)}
                                    defaultChecked={selectedRating === 4}
                                />
                            </div>
                        </div>
                        <div className="starsFilter">
                            <div className="stars">{renderRating(5)}</div>
                            <div className="rating-input">
                                <label htmlFor="5">5</label>
                                <input
                                    type="radio"
                                    id="5"
                                    name="rate"
                                    onClick={() => setSelectedRating(5)}
                                    defaultChecked={selectedRating === 5}
                                />
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="delivery-filter">
                        <div className="delivery">
                            <p>Достава</p>
                            <div className="chooseOption">
                                <label htmlFor="delivery">
                                    <img src={delivery} alt="delivery" />
                                </label>
                                <input
                                    type="radio"
                                    id="delivery"
                                    name="delivery"
                                    onClick={() =>
                                        setSelectedDelivery("достава")
                                    }
                                    defaultChecked={
                                        selectedDelivery === "достава"
                                    }
                                />
                            </div>
                        </div>
                        <div className="pickUp">
                            <p>Подигање</p>
                            <div className="chooseOption">
                                <label htmlFor="pickUp">
                                    <img src={pickUp} alt="pickUp" />
                                </label>
                                <input
                                    type="radio"
                                    id="pickUp"
                                    name="delivery"
                                    onClick={() =>
                                        setSelectedDelivery("подигање")
                                    }
                                    defaultChecked={
                                        selectedDelivery === "подигање"
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filtered-cards">
                    {filteredRecipes.slice(0, visibleRecipes).map((recipe) => (
                        <ChefCardMenu recipe={recipe} key={recipe.id} />
                    ))}
                    {filteredRecipes.length > visibleRecipes && (
                        <button onClick={showMoreItems} className="showMoreBtn">
                            Покажи повеќе
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Meni;
