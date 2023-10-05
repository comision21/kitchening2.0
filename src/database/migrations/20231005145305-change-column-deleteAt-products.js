"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('products', 'deleteAt', 'deletedAt');
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('products', 'deletedAt', 'deleteAt');
  },
};
