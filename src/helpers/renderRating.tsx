export const renderRating = (rating: number) => {
    switch (true) {
        case rating <= 1.5:
            return (
                <>
                    <i className="fa-solid fa-star" />
                    <i className="fa-regular fa-star" />
                    <i className="fa-regular fa-star" />
                    <i className="fa-regular fa-star" />
                    <i className="fa-regular fa-star" />
                </>
            );
        case rating <= 2.5 && rating > 1.5:
            return (
                <>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-regular fa-star" />
                    <i className="fa-regular fa-star" />
                    <i className="fa-regular fa-star" />
                </>
            );
        case rating <= 3.5 && rating > 2.5:
            return (
                <>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-regular fa-star" />
                    <i className="fa-regular fa-star" />
                </>
            );
        case rating <= 4.5 && rating > 3.5:
            return (
                <>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-regular fa-star" />
                </>
            );
        default:
            return (
                <>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                </>
            );
    }
};
