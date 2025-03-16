const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

    sequelize.define('Car', {
    carId:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    model: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    year :{
        type: DataTypes.INTEGER,
        allowNull : false
    },
    price:{
        type: DataTypes.STRING,
        allowNull : false
    },
    place:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    kilometers:{
        type: DataTypes.STRING,
        allowNull : false
    },
    color:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    fuel:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    img:{
        type: DataTypes.JSON
    },
    engine:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    power:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    transmission:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    drive:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    capacity:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false,
    },

    favorite:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },

    createInDb: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }
},
{ freezeTableName: true });
}

