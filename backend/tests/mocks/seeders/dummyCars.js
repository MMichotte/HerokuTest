'use strict'

const dummyCars = require('../dummyCars')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cars',
      dummyCars,
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cars', null, {})
  }
}
