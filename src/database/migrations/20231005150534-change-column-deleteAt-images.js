"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Images', 'deleteAt', 'deletedAt');
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Images', 'deletedAt', 'deleteAt');
  },
};
