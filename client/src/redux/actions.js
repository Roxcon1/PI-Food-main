import axios from "axios"

 
export const GET_RECIPES = "GET_RECIPES"
export const GET_RECIPE = "GET_RECIPE"
export const NAME_RECIPES = "NAME_RECIPES"
export const FILTER_RECIPES = "FILTER_RECIPES"
export const ORDER_RECIPES = "ORDER_RECIPES"

export const getRecipes = () => {
    return async function(dispatch){
        const APIRecipes = await axios.get(
        "http://localhost:3001/recipes");
        const recipes = APIRecipes.data;
        dispatch({type:GET_RECIPES, payload:recipes});
    }
}

export const getRecipe = (id) => {
    return async function(dispatch){
        const APIRecipe = await axios.get(`http://localhost:3001/recipes/${id}`);
        const recipe = APIRecipe.data
        dispatch({type:GET_RECIPE, payload:recipe})
    }
}

export const getRecipeName  = (name) => {
    return async function(dispatch){
    const APIRecipe = await axios.get(`http://localhost:3001/recipes/?name=${name}`);
    const recipe = APIRecipe.data
    dispatch({type:NAME_RECIPES, payload:recipe})
    }
}

export const filterRecipes = (diet) => {
    return async function(dispatch){
    const recipes = []
    dispatch({type:FILTER_RECIPES, payload:recipes})
    }
}

export const orderRecipes = (alphabetic, health) => {
    return async function(dispatch){
    const recipes = []
    dispatch({type:ORDER_RECIPES, payload:recipes})
    }
}