import italianIcon from "../assets/images/italian-icon.png";
import indianIcon from "../assets/images/indian-food.png";
import mexicanIcon from "../assets/images/meksiko-icon.png";
import traditionalIcon from "../assets/images/curry.png";
import chineseIcon from "../assets/images/chinese-icon.png";
import fishIcon from "../assets/images/fish-icon.png";

export const renderCuisineIcons = (cuisine: string) => {
    if (cuisine === "Италијанска") {
        return <img key={cuisine} src={italianIcon} alt={`${cuisine} кујна`} />;
    } else if (cuisine === "Мексичка") {
        return <img key={cuisine} src={mexicanIcon} alt={`${cuisine} кујна`} />;
    } else if (cuisine === "Традиционална") {
        return (
            <img key={cuisine} src={traditionalIcon} alt={`${cuisine} кујна`} />
        );
    } else if (cuisine === "Риба") {
        return <img key={cuisine} src={fishIcon} alt={`${cuisine} кујна`} />;
    } else if (cuisine === "Кинеска") {
        return <img key={cuisine} src={chineseIcon} alt={`${cuisine} кујна`} />;
    } else if (cuisine === "Индиска") {
        return <img key={cuisine} src={indianIcon} alt={`${cuisine} кујна`} />;
    }
};
