const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("User", {
    userId: {
      type: DataTypes.STRING, // O DataTypes.CHAR(36)
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nickname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      require: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    picture: {
      type: DataTypes.STRING,
    },
    publications: {
      type: DataTypes.JSON, // En lugar de ARRAY(DataTypes.STRING)
      defaultValue: [],
    },
    favorites: {
      type: DataTypes.JSON, // En lugar de ARRAY(DataTypes.STRING)
      defaultValue: [],
    },
    admin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      default: true,
    },
  },{ freezeTableName: true });
};
