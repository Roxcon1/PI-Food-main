import axios from "axios"

 
export const GET_RECIPES = "GET_RECIPES"
export const GET_RECIPE = "GET_RECIPE"
export const GET_DIETS = "GET_DIETS"


export const getRecipes = () => {
    return async function(dispatch){
        const APIRecipes = await axios.get(
        "http://localhost:3001/recipes").catch(function(error){dispatch({type:GET_RECIPES, payload:{error:"error"}})});;
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

export const getDiets = () => {
    return async function(dispatch){
        const ApiDiets = await axios.get(`http://localhost:3001/diets`);
        const diets = ApiDiets.data
        dispatch({type:GET_DIETS, payload:diets})
    } 
}