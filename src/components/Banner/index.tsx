import React, { useState } from "react";
import "./style.scss";
import logoPic from "../../../public/logo.svg";
import bannerPic from "../../assets/images/tavce gravce.png";
import arrowDown from "../../assets/images/arrowDown.png";
import Title from "../Title";
import { useContextList } from "../../context/ContextChefList";
import { Link } from "react-router-dom";

const Banner = () => {
    const { chefs } = useContextList();
    const [chosenAddress, setChosenAddress] = useState<string>("");

    const chefAddresses: string[] = [
        ...new Set(
            chefs
                .reduce((c: string[], v) => c.concat(v.address), [])
                .map((o) => o)
        ),
    ];

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setChosenAddress(value);
    };

    return (
        <div className="banner">
            <div className="text-content">
                <div className="main-title">
                    <div className="logo-pic">
                        <img src={logoPic} alt="logo" />
                    </div>
                    <h1>Јади домашно</h1>
                </div>
                <Title title="Вкусот на твоето соседство!" />
                <div className="location">
                    <select
                        name="selectArtist"
                        className="address"
                        onChange={selectChange}
                    >
                        <option value="">Внеси адреса</option>
                        {chefAddresses.map((chefAddress) => (
                            <option key={chefAddress} value={chefAddress}>
                                {chefAddress}
                            </option>
                        ))}
                    </select>
                    <div className="arrowDown">
                        <img src={arrowDown} alt="arrowDown" />
                    </div>
                    <Link to={`/meni/${chosenAddress}`}>
                        <button className="results">Погледни резултати</button>
                    </Link>
                </div>
            </div>
            <div className="banner-pic">
                <img src={bannerPic} alt="banner-pic" />
            </div>
        </div>
    );
};

export default Banner;
