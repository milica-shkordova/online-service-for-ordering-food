export interface ourValuesInterface {
    img: string;
    title: string;
    info: string;
}

export interface statisticsDataInterface {
    class: string;
    img: string;
    alt: string;
    num: string;
    info: string;
}

export interface joiningStepsInterface {
    img: string;
    alt: string;
    info: string;
    readMore?: string;
}

export interface purposeInterface {
    img: string;
    title: string;
    info: string;
}

export interface criterionInterface {
    img: string;
    step: string;
}

export interface howToBecomeInterface {
    img: string;
    title: string;
    explanation: string;
}

export interface accordionQuestionsInterface {
    title: string;
    content: string;
}

export interface foodMenuInterface {
    img: string;
    alt: string;
    meal: string;
}

export interface ChefInfo {
    id: number;
    first_name: string;
    last_name: string;
    address: string;
    phone: string;
    chef_photo: string;
    bio: string;
    food_badge: boolean;
    rating: number;
    workOnSunday: boolean;
    cuisines: string[];
    bannerPhoto: string;
}

export interface RecipeInfo {
    id: number;
    chefId: number;
    recipe_name: string;
    cuisine: any;
    icon_type: string;
    meal_type: string;
    photo: string;
    cook_time: string;
    spicy: string;
    available_portions: number;
    available: string[];
    meal_info: string;
    main_ingredients: string[];
    nutrition_values: string[];
    allergens: string[];
    price: number;
    discount: number;
    delivery: string;
    rate: number;
}

export interface ReviewInfo {
    id: number;
    recipeId: number;
    first_name: string;
    last_name: string;
    date_of_review: string;
    reviewer_picture: string;
    rating: number;
    review: string;
}

export interface popUpRecipeAccordionInterface {
    title: string;
    info: string;
    className?: string;
}
