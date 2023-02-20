import React from "react";
import "./style.scss";
import TransitionFruitLine from "../TransitionFruitLine";
import orangePicHr from "../../assets/images/orangePic.png";
import leafPicHr from "../../assets/images/leafPic.jpg";

interface Props {
    note: string;
}

const SignUpSection: React.FC<Props> = ({ note }) => {
    return (
        <div className="section">
            <TransitionFruitLine image={orangePicHr} />
            <div className="welcomeNotes">
                <p className="thankYouNote">Ви благодариме и добредојдовте!</p>
                <p className="goodLuckNote">{note}</p>
                <button className="signUpBtn">Регистрирај се</button>
            </div>
            <div className="leafPic">
                <TransitionFruitLine image={leafPicHr} />
            </div>
        </div>
    );
};

export default SignUpSection;
