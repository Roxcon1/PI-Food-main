const { DataTypes, INTEGER } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define(
      "Diet",{
          diet_name: {
              type: DataTypes.STRING,
              allowNull: false,
          },
      },
      {
          timestamps: false,
          createdAt: false,
      }
  );
};