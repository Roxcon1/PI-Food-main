const { Diet } = require("../db")
require('dotenv').config()
const {API_KEY} = process.env;

const dietsLite = [
    {
        diet_name: "Gluten Free",
    },
    {
        diet_name: "Ketogenic",
    },
    {
        diet_name: "Vegetarian",
    },
    {
        diet_name: "Lacto-Vegetarian",
    },
    {
        diet_name: "Ovo-Vegetarian",
    },
    {
        diet_name: "Vegan",
    },
    {
        diet_name: "Pescatarian",
    },
    {
        diet_name: "Paleolithic",
    },
    {
        diet_name: "Primal",
    },
    {
        diet_name: "Whole30",
    },
];

async function getAllDiets() {
    
    const allDiets = await Diet.findAll();
    if (allDiets.length > 0) return allDiets
    else {
    const dietsDB = await Diet.bulkCreate(dietsLite);
    return dietsDB
}
}


module.exports = { getAllDiets };