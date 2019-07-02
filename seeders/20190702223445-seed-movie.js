'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', [
    {
      movie_name: "Laskar Pelangi",
      price: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movie_name: "Avenger End Game",
      price: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movie_name: "Toys Story 4",
      price: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
