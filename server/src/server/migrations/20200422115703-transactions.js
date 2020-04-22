'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
          return queryInterface.createTable('TransactionHistory', {
            id:{
              type: Sequelize.INTEGER,
              allowNull: false,
              autoIncrement:true,
              primaryKey:true,
            },
            createdAt:{
              type:Sequelize.DATE,
              allowNull: false,
              defaultValue: Sequelize.NOW,
            },
            typeOperation:{
              type:Sequelize.ENUM('INCOME', 'CONSUMPTION'),
              allowNull: false,
            },
            sum:{
              type:Sequelize.DECIMAL,
              allowNull: false,
            },
            userId:{
              type: Sequelize.INTEGER,
              allowNull: false,
              references:{
                model:'Users',
                key:'id',
              }
            }
          });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('TransactionHistory');
  },

};
