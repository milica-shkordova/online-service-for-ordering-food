import React from "react";
import "./style.scss";
import { ReviewInfo } from "../../interfaces/interfaces";

interface Props {
    review: ReviewInfo;
}

const ReviewerCard: React.FC<Props> = ({ review }) => {
    return (
        <div className="reviewerCard">
            <div className="reviewerPic">
                <img
                    src={review.reviewer_picture}
                    alt="img-value"
                    className="reviewerImg"
                />
            </div>
            <p className="review">{review.review}</p>
            <p className="reviewerInfo">
                {`${review.first_name} 
                ${review.last_name}`}
            </p>
        </div>
    );
};

export default ReviewerCard;
