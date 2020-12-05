'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cars',
      [
        {
          carBrand: 'BMW',
          carModel: 'M4',
          carColor: 'Blue',
          carPrice: 123530,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          carBrand: 'Ford',
          carModel: 'Mustang',
          carColor: 'Red',
          carPrice: 82300,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cars', null, {})
  }
}
