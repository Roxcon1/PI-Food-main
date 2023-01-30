const { DataTypes, INTEGER } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
  // defino el modelo
  module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("Recipe",
      {
        food_id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
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
          type: DataTypes.FLOAT,
          validate: {
            min: 0,
            max: 100,
            isInt: true,
            notEmpty: true
          }
        },
  
        food_image: {
          type: DataTypes.STRING,
        },
  
        food_steps: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: true
          }
        },
      },
      { timestamps: false, }
    );
  };