import { ChefInfo, RecipeInfo, ReviewInfo } from "../interfaces/interfaces";
import { ChefData, ContextChefList } from "./ContextChefList";

export interface ContextProviderProps {
    children: React.ReactNode;
    chefData: ChefInfo[];
    recipesData: RecipeInfo[];
    reviewsData: ReviewInfo[];
}

export const ContextProvider = ({
    children,
    chefData,
    recipesData,
    reviewsData,
}: ContextProviderProps) => {
    const contextValue: ChefData = {
        chefs: chefData,
        recipes: recipesData,
        reviews: reviewsData,
    };

    return (
        <ContextChefList.Provider value={contextValue}>
            {children}
        </ContextChefList.Provider>
    );
};
