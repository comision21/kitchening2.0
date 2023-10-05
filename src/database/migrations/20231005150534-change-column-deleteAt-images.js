"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('images', 'deleteAt', 'deletedAt');
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('images', 'deletedAt', 'deleteAt');
  },
};
