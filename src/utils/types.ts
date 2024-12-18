export interface Ingredient {
    strIngredient: string,
    strMeasure: string
}

export interface Meal {
    idMeal: string;
    strMeal: string;
    strDrinkAlternate: null;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strYoutube: string;
    ingredients: Ingredient[];
}