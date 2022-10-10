import { getMeals } from './getMeals';
import { getRecipes } from './getRecipes';

export const getPopulatedMeals = async () => {
    const meals = await getMeals();
    const recipes = await getRecipes();

    const PopulatedMeals = meals.map(meal => ({
        ...meal,
        recipe: recipes.filter(recipe => recipe.id === meal.recipeID)
        
    }));
    return PopulatedMeals;
}