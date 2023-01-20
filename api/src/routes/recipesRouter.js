const { Router } = require('express');
const {getRecipesHandler, getIDRecipesHandler, postRecipesHandler} = require("../handlers/recipesHandler")

const recipesRouter= Router();

recipesRouter.get("/", getRecipesHandler);

recipesRouter.get("/:id", getIDRecipesHandler);

recipesRouter.post("/", postRecipesHandler);

module.exports= recipesRouter;