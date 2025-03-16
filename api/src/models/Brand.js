
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('brand', {
        id:{
        type: DataTypes.INTEGER,
        primaryKey: true
        },
        brand: {
        type: DataTypes.STRING,
        allowNull: true,
        }
    },{ freezeTableName: true });
};
