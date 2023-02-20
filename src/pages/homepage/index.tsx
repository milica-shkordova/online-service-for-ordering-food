import React from "react";
import "./style.scss";
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import ValueCircleCard from "../../components/ValueCircleCard";
import Card from "../../components/Card";
import ReviewerCard from "../../components/ReviewerCard";
import orangePicHr from "../../assets/images/orangePic.png";
import TransitionFruitLine from "../../components/TransitionFruitLine";
import joinUsIcon1 from "../../assets/images/join-us-1.png";
import joinUsIcon2 from "../../assets/images/join-us-2.png";
import {
    chefUserSteps,
    clientUserSteps,
    ourValues,
    statisticsData,
} from "../../constants/constants";
import { Link } from "react-router-dom";
import { useContextList } from "../../context/ContextChefList";

const Homepage = () => {
    const chefData = useContextList();

    return (
        <>
            <div className="homepage">
                <Banner />
                <div className="container">
                    <div className="ourValues">
                        <Title title="Нашите вредности" />

                        {ourValues.map((value) => (
                            <ValueCircleCard
                                img={value.img}
                                title={value.title}
                                info={value.info}
                                key={value.img}
                            />
                        ))}
                        <Link to={"/kako-funkcionira-Gurmani"}>
                            <button className="findMoreBtn">
                                Дознај повеќе за нас
                            </button>
                        </Link>
                    </div>
                    <div className="meetOurChefs">
                        <Title title="Запознајте ги нашите готвачи" />
                        {chefData.chefs.slice(1, 4).map((chef) => (
                            <Card chef={chef} key={chef.id} />
                        ))}
                        <Link to={"/gotvachi"}>
                            <button className="toChefs">Кон готвачи</button>
                        </Link>
                    </div>
                    <hr className="full" />
                    <div className="statistics">
                        {statisticsData.map((statistics) => (
                            <div
                                className={statistics.class}
                                key={statistics.alt}
                            >
                                <img
                                    src={statistics.img}
                                    alt={statistics.alt}
                                />
                                <h2>{statistics.num}</h2>
                                <p>{statistics.info}</p>
                            </div>
                        ))}
                    </div>
                    <hr className="full" />
                    <div className="reviewers">
                        {chefData.reviews.slice(11, 14).map((review) => (
                            <ReviewerCard review={review} key={review.id} />
                        ))}
                    </div>
                    <TransitionFruitLine image={orangePicHr} />
                    <div className="join">
                        <h1>
                            Стани дел од семејството <span>Jади Домашно</span>
                        </h1>
                        <div className="icons-join-us">
                            <div className="join-us-icon-1">
                                <img src={joinUsIcon1} alt="join-us-icon-1" />
                                <p>Сакам да нарачувам храна</p>
                            </div>
                            <div className="join-us-icon-2">
                                <img src={joinUsIcon2} alt="join-us-icon-2" />
                                <p>Сакам да станам готвач</p>
                            </div>
                        </div>
                    </div>
                    <div className="transition">
                        <hr className="half" />
                        <hr className="half" />
                    </div>
                    <div className="steps-part">
                        <div className="client-user">
                            {clientUserSteps.map((steps) => (
                                <div
                                    className="steps"
                                    key={`client-${steps.alt}`}
                                >
                                    <div className="step-icon">
                                        <img src={steps.img} alt={steps.alt} />
                                    </div>
                                    <div className="step-info">
                                        <p>{steps.info}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="chef-user">
                            {chefUserSteps.map((steps) => (
                                <div
                                    className="steps"
                                    key={`chef-${steps.alt}`}
                                >
                                    <div className="step-icon">
                                        <img src={steps.img} alt={steps.alt} />
                                    </div>
                                    <div className="step-info">
                                        <p>{steps.info}</p>
                                        {steps.readMore && (
                                            <p className="readMoreAbout">
                                                {steps.readMore}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="join-buttons">
                            <div className="become-a-client">
                                <button>Стани клиент</button>
                            </div>
                            <div className="become-a-chef">
                                <button>Стани готвач</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homepage;
