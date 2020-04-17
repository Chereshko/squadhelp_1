'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'Offers',
        'offerDate',
        {
          type:Sequelize.DATE,
          allowNull:false,
          defaultValue: Sequelize.fn('now'),
        }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'Offers',
        'offerDate'
    );
  }
};
