const { Router } = require('express');
const homeHandler = require("../handlers/mainHandler")

const mainRouter= Router();

mainRouter.get("/", homeHandler)

module.exports = mainRouter;