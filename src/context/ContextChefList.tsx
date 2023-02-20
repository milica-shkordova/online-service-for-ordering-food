import { createContext, useContext } from "react";
import { ChefInfo, RecipeInfo, ReviewInfo } from "../interfaces/interfaces";

export interface ChefData {
    chefs: ChefInfo[];
    recipes: RecipeInfo[];
    reviews: ReviewInfo[];
}

export const ContextChefList = createContext({} as ChefData);

export const useContextList = () => useContext(ContextChefList);
