import React, { useState } from "react";
import "./style.scss";
import { ReviewInfo } from "../../interfaces/interfaces";

interface Props {
    review: ReviewInfo;
}

const ReviewSimpleCommentCard: React.FC<Props> = ({ review }) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    return (
        <div className="reviewSimpleCommentCard">
            <div className="container">
                <p className="reviewerNameInfo">{`${review.first_name} ${review.last_name}`}</p>
                <p className="comment">{review.review}</p>
                <div
                    className="heartIcon"
                    onClick={() => {
                        setIsFavorite(!isFavorite);
                    }}
                >
                    <i
                        className={`fa-${
                            isFavorite ? `solid` : `regular`
                        } fa-heart`}
                    />
                </div>
            </div>
        </div>
    );
};

export default ReviewSimpleCommentCard;
