const { DataTypes, INTEGER } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('diet', {
    diet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      autoIncrement: true,
      primaryKey: true
    },
    diet_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
}