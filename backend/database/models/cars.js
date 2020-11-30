import {Sequelize} from 'sequelize';
import dbConnection from "../config/database";

const cars = dbConnection.define('cars', {

    _carId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    carBrand: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    carModel: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,

    },
    carPrice: {
        type: Sequelize.BIGINT,
        unique: false,
        allowNull: false
    }
});

export default cars;
