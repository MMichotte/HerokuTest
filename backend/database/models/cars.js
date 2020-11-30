import {Sequelize} from 'sequelize';
import dbConnection from "../../config/database";

const Cars = dbConnection.define('cars', {
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
    carColor: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
    },
    carPrice: {
        type: Sequelize.BIGINT,
        unique: false,
        allowNull: false
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
    }
});

export default Cars;
