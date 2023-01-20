const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dietsRouter = require("./dietsRouter")
const recipesRouter = require("./recipesRouter")
const mainRouter = require("./mainRouter")


const router = Router();

router.use("/", mainRouter)
router.use("/recipes", recipesRouter)
router.use("/diets", dietsRouter)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
