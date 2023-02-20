import React from "react";
import "./style.scss";
import { renderRating } from "../../helpers/renderRating";
import { ReviewInfo } from "../../interfaces/interfaces";

interface Props {
    review: ReviewInfo;
}

const ReviewRecipeComment: React.FC<Props> = ({ review }) => {
    return (
        <div className="reviewRecipeComment">
            <div className="chefPic">
                <img src={review.reviewer_picture} alt="chef" />
            </div>
            <div className="chefData">
                <div className="info">
                    <p className="date">{review.date_of_review}</p>
                    <p className="chefName">
                        {`${review.first_name} ${review.last_name}`}
                    </p>
                </div>
                <div className="reviews-stars">
                    {renderRating(review.rating)}
                </div>
                <div className="review">{review.review}</div>
            </div>
        </div>
    );
};

export default ReviewRecipeComment;
