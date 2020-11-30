'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('cars',
            [
                {
                    carBrand: 'BMW',
                    carModel: 'M4',
                    carPrice: 123530
                },
                {   
                    carBrand: 'Ford',
                    carModel: 'Mustang',
                    carPrice: 82300
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('cars', null, {});
    }
};
