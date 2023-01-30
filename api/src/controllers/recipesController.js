const { Recipe, Diet } = require("../db")
const {getAllDiets} = require('./DietController')
require('dotenv').config()
const {API_KEY} = process.env;
const axios = require("axios");
const { where } = require("sequelize");
const sequelize = require('sequelize');
const Op = sequelize.Op;

const cleanArray = (arr) => 
    arr.map((elem) => {
        return {
        food_id: elem.id,
        food_name: elem.title,
        food_summary: elem.summary,
        food_healthScore: elem.healthScore,
        diets: elem.diets,
        dishTypes: elem.dishTypes.join(", "),
        food_image: elem.image,
        food_steps: elem.analyzedInstructions[0]?.steps.map((e) => {return e.number +' ' + e.step;}),
        created: false
        }
    });

const apiInfo = async () => {
    const Raw = await axios.get (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
    return Raw.data.results
}

const apiClean = async () => {
    const apiRaw = await apiInfo()
    const apiClean = cleanArray(apiRaw)
    return apiClean
}

const dbInfo = async () => {
    try {
        const dbAll = await Recipe.findAll({
            include: {
                model: Diet,
                attributes: ["diet_name"],
                through: {
                    attributes: []
                },
            },
        });
    return dbAll;
    } catch (error) {
        throw Error ("La base de datos no esta incluida")
    }
        
}

const finalDB = async () => {
    const dbArray = await dbInfo()
    return dbArray
}

const finalData = async () => {
    const apiInfo = await apiClean()
    const dbInfo = await finalDB()
    const data = dbInfo.concat(apiInfo)
    return data

}
  
const createRecipe = async (name, summary, healthScore, steps, diets, image) => {

if (!name) throw Error(`No se puede crear una receta sin Nombre`)
if (!summary) throw Error(`No se puede crear una receta sin Resumen`)
if (healthScore > 100) throw Error(`el Health_Score no puede ser mayor a 100`)
if (!steps) throw Error(`No se puede crear una receta sin Pasos`)
if (!image) image = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
if (!diets) throw Error(`No se puede crear una receta sin una Dieta`)

        const recipeCreated = await Recipe.create({
            food_name: name,
            food_summary: summary,
            food_healthScore: healthScore,
            food_image: image,
            food_steps: steps
        });

          await getAllDiets()

          const filterDiets = await Diet.findAll({
            where:{diet_name : diets}
          })

    const recipeArray = []

    recipeArray.push(recipeCreated)
    recipeArray.push(filterDiets)
        
    return recipeArray
}

const deleteRecipe = async (id) => {
    if (!id.length == 36) ("Se requiere una ID de Usuario")
    if (!id) throw Error ("No se puede borrar Recetas sin un ID Valido")
    let recipeToDelete = await Recipe.findAll({where:{food_id : id} })
    let temp = recipeToDelete
    const recipeDeleted = Recipe.destroy({where: {food_id : id} })
    recipeToDelete = await Recipe.findAll({where:{food_id : id} })

    return temp
}
module.exports = { createRecipe, finalData, deleteRecipe};
