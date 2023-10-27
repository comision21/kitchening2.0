"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Products', 'deleteAt', 'deletedAt');
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Products', 'deletedAt', 'deleteAt');
  },
};
