import React, { useState } from "react";
import "./style.scss";
import logoPic from "../../../public/logo.svg";
import kakoFunkcionira from "../../assets/images/kakofunkcionira.svg";
import gotvaci from "../../assets/images/gotvaci.svg";
import ponuda from "../../assets/images/ponuda.svg";
import meni from "../../assets/images/menu.svg";
import forum from "../../assets/images/forum.svg";
import profil from "../../assets/images/profil.png";
import korpa from "../../assets/images/korpa.png";
import { Link } from "react-router-dom";

type ActiveLinkType = "home" | "kako-funkcionira" | "gotvaci" | "menu";

const Header = () => {
    const [activeLink, setActiveLink] = useState<ActiveLinkType>("home");

    return (
        <div className="navbar">
            <ul className="menu-left">
                <Link to="/">
                    <li className="icon" onClick={() => setActiveLink("home")}>
                        <div className="pic">
                            <img src={logoPic} alt="logo-icon" />
                        </div>
                        <p className={`${activeLink === "home" && "active"}`}>
                            Јади домашно
                        </p>
                    </li>
                </Link>
                <Link to="/kako-funkcionira-Gotvachi">
                    <li
                        className="icon"
                        onClick={() => setActiveLink("kako-funkcionira")}
                    >
                        <div className="pic">
                            <img
                                src={kakoFunkcionira}
                                alt="kakoFunkcionira-icon"
                            />
                        </div>
                        <p
                            className={`${
                                activeLink === "kako-funkcionira" && "active"
                            }`}
                        >
                            Kако функционира
                        </p>
                    </li>
                </Link>
                <Link to="/gotvachi">
                    <li
                        className="icon"
                        onClick={() => setActiveLink("gotvaci")}
                    >
                        <div className="pic">
                            <img src={gotvaci} alt="gotvaci-icon" />
                        </div>
                        <p
                            className={`${
                                activeLink === "gotvaci" && "active"
                            }`}
                        >
                            Готвачи
                        </p>
                    </li>
                </Link>
                <Link to="/meni">
                    <li className="icon" onClick={() => setActiveLink("menu")}>
                        <div className="pic">
                            <img src={meni} alt="meni-icon" />
                        </div>
                        <p className={`${activeLink === "menu" && "active"}`}>
                            Мени
                        </p>
                    </li>
                </Link>
            </ul>

            <ul className="menu-right">
                <li className="search-input">
                    <input
                        type="search"
                        placeholder="&nbsp; &nbsp;&#128269; Пребарај"
                    />
                </li>

                <li className="icon">
                    <div className="pic">
                        <img src={profil} alt="profil-icon" />
                    </div>
                    <p>мој профил</p>
                </li>
                <li className="icon">
                    <div className="pic">
                        <img src={korpa} alt="korpa-icon" />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Header;
