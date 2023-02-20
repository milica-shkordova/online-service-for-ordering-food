import React from "react";
import "./style.scss";
import houseicon from "../../assets/images/house.png";
import { ChefInfo } from "../../interfaces/interfaces";
import { Link } from "react-router-dom";
import { renderRating } from "../../helpers/renderRating";

interface Props {
    chef: ChefInfo;
}

const OurChefs: React.FC<Props> = ({ chef }) => {
    return (
        <div className="ourChefs">
            <div className="container">
                <div className="picture-part">
                    <img src={chef.chef_photo} alt="main-img" />
                </div>
                <div className="info-part">
                    <div className="left-part">
                        <p className="nameInfo">{`${chef.first_name} ${chef.last_name}`}</p>
                        <div className="reviews-stars">
                            {renderRating(chef.rating)}
                        </div>
                        <div className="location-distance">
                            <img src={houseicon} alt="house-icon" />
                            <p> 300m</p>
                        </div>
                    </div>
                    <div className="right-part">
                        <ul>
                            {chef.cuisines.map((cuisine) => (
                                <li key={`${chef.id}${cuisine}`}>{cuisine}</li>
                            ))}
                        </ul>
                        <Link to={`/gotvachi/${chef.id}`}>
                            <p className="findMore">Види повеќе</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurChefs;
