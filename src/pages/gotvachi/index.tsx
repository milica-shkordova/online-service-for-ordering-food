import React, { useEffect, useState } from "react";
import "./style.scss";
import Title from "../../components/Title";
import OurChefs from "../../components/OurChefs";
import { useContextList } from "../../context/ContextChefList";
import { ChefInfo } from "../../interfaces/interfaces";
import { useParams } from "react-router-dom";
import arrowDown from "../../assets/images/arrowDown.png";

type RatingType = 3 | 4 | 5;

const Gotvachi = () => {
    const { chefs } = useContextList();
    const { address } = useParams();
    const [selectedRating, setSelectedRating] = useState<RatingType>(3);
    const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
    const [filteredChefsData, setFilteredChefsData] = useState<ChefInfo[]>([]);
    const [chosenAddress, setChosenAddress] = useState<string>("");

    const allCuisines: string[] = [
        ...new Set(
            chefs
                .reduce((c: string[], v) => c.concat(v.cuisines), [])
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

    useEffect(() => {
        if (filteredChefsData.length === 0) {
            setFilteredChefsData(chefs);
        }
    }, [chefs]);

    const handleFilterChefs = () => {
        const chosenRating = chefs.filter(
            (chef) => chef.rating >= selectedRating
        );
        const chosenCuisines = chefs.filter((chef) =>
            chef.cuisines.some((r) => selectedCuisines.indexOf(r) >= 0)
        );

        const chosenLocation = chefs.filter(
            (chef) => chef.address === chosenAddress
        );

        if (selectedCuisines.length > 0 && chosenAddress.length > 0) {
            setFilteredChefsData(
                chosenCuisines.filter(
                    (chosen) =>
                        chosen.rating >= selectedRating &&
                        chosen.address === chosenAddress
                )
            );
        } else if (chosenCuisines.length > 0 && chosenAddress.length === 0) {
            setFilteredChefsData(
                chosenCuisines.filter(
                    (chosen) => chosen.rating >= selectedRating
                )
            );
        } else if (chosenAddress.length > 0 && chosenCuisines.length === 0) {
            setFilteredChefsData(
                chosenLocation.filter(
                    (chosen) => chosen.rating >= selectedRating
                )
            );
        } else {
            setFilteredChefsData(chosenRating);
        }
    };

    const handleCuisine = (cuisineFilter: string) => {
        if (!selectedCuisines.includes(cuisineFilter)) {
            setSelectedCuisines([...selectedCuisines, cuisineFilter]);
        } else {
            setSelectedCuisines(
                selectedCuisines.filter(
                    (selected) => selected !== cuisineFilter
                )
            );
        }
    };

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setChosenAddress(value);
    };

    useEffect(() => {
        handleFilterChefs();
    }, [selectedCuisines, selectedRating, chosenAddress]);

    return (
        <div className="gotvachi">
            <Title title="Нашите Готвачи" />
            <p className="intro">
                Јади Домашно поврзува талентирани готвачи со локални клиенти.
                <br /> <br /> Ние веруваме во обезбедувањето на шефовите во
                нашата заедница - поединци кои отсекогаш сонувале да градат
                сопствен бизнис со храна - можност да заработат значаен приход
                правејќи го она што го сакаат! Ние, исто така, веруваме дека
                секој човек треба да има пристап до здрав, домашен оброк по
                прифатлива цена. Градење заедница посветена на економско
                зајакнување и културна инклузивност - затоа почнавме да го
                градиме нашето семејство. <br /> <br /> Јади Домашно.
            </p>
            <div className="menu-preview">
                <div className="filters">
                    <select
                        name="selectArtist"
                        className="address"
                        onChange={selectChange}
                    >
                        <option value="">Локација</option>
                        {chefAddresses.map((chefAddress) => (
                            <option key={chefAddress} value={chefAddress}>
                                {chefAddress}
                            </option>
                        ))}
                    </select>
                    <div className="arrowDown">
                        <img src={arrowDown} alt="arrowDown" />
                    </div>
                    <hr />
                    <div className="ratingFilter">
                        <p className="rate">Покажи по рејтинг:</p>
                        <div className="starsFilter">
                            <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <label htmlFor="3+">3+</label>
                            </div>
                            <div className="rating-input">
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
                            <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <label htmlFor="4+">4+</label>
                            </div>
                            <div className="rating-input">
                                <input
                                    type="radio"
                                    id="4+"
                                    name="rate"
                                    defaultChecked={selectedRating === 4}
                                    onClick={() => setSelectedRating(4)}
                                />
                            </div>
                        </div>
                        <div className="starsFilter">
                            <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <label htmlFor="5">5</label>
                            </div>
                            <div className="rating-input">
                                <input
                                    type="radio"
                                    id="5"
                                    name="rate"
                                    defaultChecked={selectedRating === 5}
                                    onClick={() => setSelectedRating(5)}
                                />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="cuisineFilter">
                        <p className="chooseCuisine">Одбери кујна:</p>
                        {allCuisines.map((cuisine) => (
                            <button
                                className={`cuisineType ${
                                    selectedCuisines.includes(cuisine) &&
                                    "active"
                                }`}
                                onClick={() => {
                                    handleCuisine(cuisine);
                                }}
                                key={cuisine}
                            >
                                {cuisine}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="filteredChef-cards">
                    {filteredChefsData.map((filteredChef) => (
                        <OurChefs chef={filteredChef} key={filteredChef.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gotvachi;
