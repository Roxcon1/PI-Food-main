const { getAllDiets } = require("../controllers/dietController")

const getDietsHandler = async (req, res) => {

const diets = await getAllDiets()

try {
res.status(200).json(diets)
} catch (error) {
res.status(400).json({error: error.message})
}
};

module.exports= getDietsHandler;