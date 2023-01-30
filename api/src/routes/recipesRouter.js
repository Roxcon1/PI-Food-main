const { Router } = require('express');
const {getRecipesHandler, getIDRecipesHandler, postRecipesHandler, deleteUserRecipesHandler, updateRecipeHandler} = require("../handlers/recipesHandler")

const recipesRouter= Router();

recipesRouter.get("/", getRecipesHandler);

recipesRouter.get("/:id", getIDRecipesHandler);

recipesRouter.post("/", postRecipesHandler);

recipesRouter.delete("/:id", deleteUserRecipesHandler)

recipesRouter.put("/:id", updateRecipeHandler)

module.exports= recipesRouter;