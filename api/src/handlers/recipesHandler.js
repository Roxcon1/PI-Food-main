const getRecipesHandler = (req, res) => {
    const {name} = req.query
    if (!name) res.send("WIP: Trae todas las recetas");
    else res.send (`WIP: Trae recetas por la Query ${name}`);
};

const getIDRecipesHandler = (req, res) => {
    const {id} = req.params
    res.status(200).send(`WIP: Trae recetas por la ID ${id}`);
};

const postRecipesHandler = (req, res) => {
    const {food_id, food_name, food_summary, food_healthScore, food_steps} = req.body
    res.send(`Creado receta con estos parametros: 
    food_id=${food_id},
    food_name=${food_name},
    food_summary=${food_summary},
    food_healthScore=${food_healthScore},
    food_steps=${food_steps}
    `);
};

module.exports = { getRecipesHandler, getIDRecipesHandler, postRecipesHandler };