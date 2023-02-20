import React from "react";
import "./style.scss";
import logoPic from "../../../public/logo.svg";
import facebook from "../../assets/images/fb.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";
import youtube from "../../assets/images/youtube.png";
import poshta from "../../assets/images/poshta.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="social">
                <div className="logo">
                    <img src={logoPic} alt="logo-pic" />
                    <div className="title">
                        <h2>
                            Јади
                            <br /> домашно
                        </h2>
                        <p>Jадете здраво. Јадете подобро.</p>
                    </div>
                </div>
                <div className="social-icons">
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src={facebook} alt="fb" />
                    </a>
                    <a href="https://www.twitter.com/" target="_blank">
                        <img src={twitter} alt="twitter" />
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank">
                        <img src={linkedin} alt="linkedin" />
                    </a>
                    <a href="https://www.youtube.com/" target="_blank">
                        <img src={youtube} alt="youtube" />
                    </a>
                </div>
            </div>
            <div className="policy">
                <ul className="faq">
                    <li>За нас</li>
                    <li>Мени</li>
                    <li>Стани готвач</li>
                    <li>Најави се</li>
                    <li>FAQ</li>
                </ul>
                <ul className="conditions">
                    <li>Правни</li>
                    <li>Политика за приватност</li>
                    <li>Услови за веб-страница</li>
                    <li>Прифатлива политика за користење</li>
                    <li>Политика за колачиња</li>
                    <li>Општи услови</li>
                </ul>
            </div>
            <div className="subscribe">
                <p>Пратете ги новостите</p>
                <div className="pic">
                    <img src={poshta} alt="email" />
                </div>
                <input type="text" placeholder="Eлектронска пошта" />
                <button className="btn-org">ПРЕТПЛАТИ СЕ</button>
            </div>
        </div>
    );
};

export default Footer;
