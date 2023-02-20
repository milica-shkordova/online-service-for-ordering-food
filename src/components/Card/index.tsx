import React from "react";
import "./style.scss";
import badge from "../../assets/images/badge.png";
import houseicon from "../../assets/images/house.png";
import { ChefInfo } from "../../interfaces/interfaces";
import { Link } from "react-router-dom";
import { renderRating } from "../../helpers/renderRating";

interface Props {
    chef: ChefInfo;
}

const Card: React.FC<Props> = ({ chef }) => {
    console.log(chef.rating);
    return (
        <div className="card">
            <div className="picture-part">
                <img
                    src={chef.chef_photo}
                    alt={`${chef.first_name}-main-img`}
                    className="chef-pic"
                />
                {chef.rating === 5 && (
                    <div className="badge">
                        <img src={badge} alt="badge" />
                    </div>
                )}
            </div>
            <div className="info-part">
                <div className="rows">
                    <p className="nameInfo">
                        {chef.first_name} {chef.last_name}
                    </p>
                    <div className="reviews-stars">
                        {renderRating(chef.rating)}
                    </div>
                </div>

                <div className="content">
                    <div className="left-content">
                        {chef.cuisines.map((cuisine) => (
                            <p key={cuisine}>{cuisine}</p>
                        ))}
                    </div>
                    <div className="right-content">
                        <div className="location-distance">
                            <img src={houseicon} alt="house-icon" />
                            <p> 300m</p>
                        </div>
                        <Link to={`/gotvachi/${chef.id}`}>
                            <button className="btn-findMore">
                                Дознај повеќе...
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
