import React from "react";
import "./style.scss";
import logoPic from "../../../public/logo.svg";
import Title from "../../components/Title";
import PurposeCard from "../../components/PurposeCard";
import {
    chefPurposes,
    criteria,
    howToBecomeChef,
    mostAskedQuestions,
} from "../../constants/constants";
import CriterionCard from "../../components/CriterionCard";
import HowToBecomeCard from "../../components/HowToBecomeCard";
import ReviewerCard from "../../components/ReviewerCard";
import AccordionCard from "../../components/AccordionCard";
import { Link } from "react-router-dom";
import SignUpSection from "../../components/SignUpSection";
import { useContextList } from "../../context/ContextChefList";

const KakoFunkcioniraGotvachi = () => {
    const chefData = useContextList();

    return (
        <div className="kakoFunkcioniraGotvachi">
            <div className="container">
                <div className="info-part">
                    <div className="logo-pic">
                        <img src={logoPic} alt="logo" />
                    </div>
                    <Title title="Како функционира?" />
                    <div className="buttons">
                        <Link to="/kako-funkcionira-Gotvachi">
                            <button className="org">Готвачи</button>
                        </Link>
                        <Link to="/kako-funkcionira-Gurmani">
                            <button className="grey">Гурмани</button>
                        </Link>
                    </div>
                    <p className="infoGotvachi">
                        Јади Домашно поврзува талентирани готвачи со локални
                        клиенти. <br /> Ние веруваме во обезбедувањето на
                        шефовите во нашата заедница - поединци кои отсекогаш
                        сонувале да градат сопствен бизнис со храна - можност да
                        заработат значаен приход правејќи го она што го сакаат!
                        Ние, исто така, веруваме дека секој човек треба да има
                        пристап до здрав, домашен оброк по прифатлива цена.
                        Градење заедница посветена на економско зајакнување и
                        културна инклузивност - затоа го започнавме Јади
                        Домашно.
                    </p>
                </div>
                <div className="whyYouShoudBecomeAchef">
                    <Title title="Зошто да станете готвач на Јади домашно?" />
                    <div className="purposes">
                        {chefPurposes.map((purpose) => (
                            <PurposeCard
                                img={purpose.img}
                                title={purpose.title}
                                info={purpose.info}
                                key={purpose.img}
                            />
                        ))}
                    </div>
                </div>
                <div className="criteria">
                    <Title title="Кои критериуми треба да ги исполнува еден готвач?" />
                    <div className="steps-criteria">
                        {criteria.map((criteria) => (
                            <CriterionCard
                                img={criteria.img}
                                step={criteria.step}
                                key={criteria.img}
                            />
                        ))}
                    </div>
                </div>
                <div className="howToBecomeAchef">
                    <Title title="Како да станете готвач на Јади домашно?" />
                    <div className="howToBecomeChef-cards">
                        {howToBecomeChef.map((card) => (
                            <HowToBecomeCard
                                img={card.img}
                                title={card.title}
                                explanation={card.explanation}
                                key={card.img}
                            />
                        ))}
                    </div>
                </div>
                <div className="whatDidTheySay">
                    <Title title="Што рекоа нашите задоволни гурмани?" />
                    <div className="reviewers">
                        {chefData.reviews.slice(4, 7).map((review) => (
                            <ReviewerCard review={review} key={review.id} />
                        ))}
                    </div>
                </div>
                <div className="sign-up-section">
                    <SignUpSection note="Ви посакуваме успешна работа, многу готвење и споделување убави моменти со храната!" />
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

export default KakoFunkcioniraGotvachi;
