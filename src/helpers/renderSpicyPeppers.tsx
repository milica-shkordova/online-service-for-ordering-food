import pepper from "../assets/images/pepper.png";
import notSpicy from "../assets/images/notSpicy.png";

export const renderSpicyPeppers = (spicy: string) => {
    if (spicy === "не лути") {
        return (
            <>
                <div className="pic">
                    <img src={notSpicy} alt="notSpicyIcon" />
                </div>
                <div className="pic">
                    <img src={notSpicy} alt="notSpicyIcon" />
                </div>
                <div className="pic">
                    <img src={notSpicy} alt="notSpicyIcon" />
                </div>
            </>
        );
    } else if (spicy === "пикантно") {
        return (
            <>
                <div className="pic">
                    <img src={pepper} alt="spicyIcon" />
                </div>
                <div className="pic">
                    <img src={pepper} alt="spicyIcon" />
                </div>
                <div className="pic">
                    <img src={notSpicy} alt="notSpicyIcon" />
                </div>
            </>
        );
    } else if (spicy === "многу луто") {
        return (
            <>
                <div className="pic">
                    <img src={pepper} alt="spicyIcon" />
                </div>
                <div className="pic">
                    <img src={pepper} alt="spicyIcon" />
                </div>
                <div className="pic">
                    <img src={pepper} alt="spicyIcon" />
                </div>
            </>
        );
    }
};
