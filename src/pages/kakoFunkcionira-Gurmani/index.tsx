import React from "react";
import "./style.scss";
import Title from "../../components/Title";
import logoPic from "../../../public/logo.svg";
import { Link } from "react-router-dom";
import {
    howToJoinUs,
    mostAskedQuestions,
    visitorPurposes,
} from "../../constants/constants";
import PurposeCard from "../../components/PurposeCard";
import HowToBecomeCard from "../../components/HowToBecomeCard";
import Card from "../../components/Card";
import SignUpSection from "../../components/SignUpSection";
import AccordionCard from "../../components/AccordionCard";
import { useContextList } from "../../context/ContextChefList";

const KakoFunkcioniraGurmani = () => {
    const chefData = useContextList();

    return (
        <div className="kakoFunkcioniraGurmani">
            <div className="container">
                <div className="info-part">
                    <div className="logo-pic">
                        <img src={logoPic} alt="logo" />
                    </div>
                    <Title title="Како функционира?" />
                    <div className="buttons">
                        <Link to="/kako-funkcionira-Gotvachi">
                            <button className="grey">Готвачи</button>
                        </Link>
                        <Link to="/kako-funkcionira-Gurmani">
                            <button className="org">Гурмани</button>
                        </Link>
                    </div>
                    <p className="infoGurmani">
                        Јади домашно е платформа која ја спојува љубовта кон
                        храната и готвењето на едно место! <br /> Тука може да
                        најдете готвачи во близина на вашата локација и да
                        нарачате вкусна, топла и домашна храна. Ние сме
                        платформа која сака да ги поттикне соседите да ја
                        споделат љубовта кон храната и да дадеме можност на сите
                        љубители на готвењето да ја покажат својата умешност и
                        да ја споделат со нивната околина. Ако готвењето нешто
                        што те прави среќен и сакаш да си дел од нашата
                        приказна. Ние ти ја даваме сета слобода да се изразиш,
                        но и да заработиш.
                    </p>
                </div>
                <div className="ourMissionAndVision">
                    <Title title="Нашата мисија и визија" />
                    <div className="purposes">
                        {visitorPurposes.map((purpose) => (
                            <PurposeCard
                                img={purpose.img}
                                title={purpose.title}
                                info={purpose.info}
                                key={purpose.title}
                            />
                        ))}
                    </div>
                </div>
                <div className="howToBecomePartOfUs">
                    <Title title="Како да станете дел од Јади домашно?" />
                    <div className="howToJoinUs-cards">
                        {howToJoinUs.map((card) => (
                            <HowToBecomeCard
                                img={card.img}
                                title={card.title}
                                explanation={card.explanation}
                                key={card.title}
                            />
                        ))}
                    </div>
                </div>
                <div className="meetOurChefs">
                    <Title title="Запознајте ги нашите готвачи" />
                    {chefData.chefs.slice(2, 5).map((chef) => (
                        <Card chef={chef} key={chef.id} />
                    ))}
                    <Link to="/kako-funkcionira-Gotvachi">
                        <button className="toChefs">Кон готвачи</button>
                    </Link>
                </div>
                <div className="sign-up-section">
                    <SignUpSection note="Ви посакуваме уживање во храната од нашите готвачи и споделување убави моменти во соседството!" />
                </div>
                <div className="mostAskedQ">
                    <Title title="Најчесто поставувани прашања" />
                    <div className="accordionQuestionCards">
                        {mostAskedQuestions.map((question) => (
                            <AccordionCard
                                title={question.title}
                                content={question.content}
                                key={question.title}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KakoFunkcioniraGurmani;
