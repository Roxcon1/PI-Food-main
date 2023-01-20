const { DataTypes, INTEGER } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    food_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      autoIncrement: true,
      primaryKey: true
    },
    food_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    food_summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    food_healthScore: {
      type: DataTypes.INTEGER
    },
    food_steps: {
      type: DataTypes.STRING
    }
  });
};
