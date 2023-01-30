const { finalData, createRecipe, deleteRecipe} = require("../controllers/recipesController")


const getRecipesHandler = async (req, res) => {
    const { name } = req.query;
    try {
        let allRecipes = await finalData();
        if (name) {
            let recipeName = await allRecipes.filter((obj) =>
            obj.food_name.toLowerCase().includes(name.toLowerCase())
            );
            if(recipeName.length) {
            res.status(200).send(recipeName)
            } else throw Error(`The recipe with the name: ${name} does not exist`);
        } else {
            res.status(200).json(allRecipes);
        }
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

const getIDRecipesHandler = async (req, res)  => {
    const { id } = req.params;
    try {
    let allRecipes = await finalData();
    if (id) {
        let recipeId = await allRecipes.filter((obj) => obj.food_id == id);
        if (recipeId.length){
            res.status(200).send(recipeId)
        } else throw Error (`A recipe with the ID ${id} could not be found`)
        }
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

const updateRecipeHandler = async (req, res) => {}

const deleteUserRecipesHandler = async (req, res) => {
    const { id } = req.params
    try {
    const RecetaBorrada = await deleteRecipe(id)
    if (RecetaBorrada) res.status(202).json("La receta fue Borrada Correctamente / Ya se borro")
    } catch (error) {
    res.status(404).json({error: error.message})
    }
}
const postRecipesHandler = async (req, res) => {
    try {
    const { name, summary, healthScore, steps, diets, image,} = req.body;
    const newRecipe = await createRecipe(name, summary, healthScore, steps, diets, image,)
    res.status(201).json("Creado Exitosamente!")
    } catch (error) {
    res.status(400).json({error: error.message})
    }
};

module.exports = { getRecipesHandler, getIDRecipesHandler, postRecipesHandler,deleteUserRecipesHandler,updateRecipeHandler};