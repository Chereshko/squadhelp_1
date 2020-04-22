'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('TransactionHistory', [{
                userId: '1',
                typeOperation: 'CONSUMPTION',
                sum: 1324,
                createdAt: new Date(),
            },
            {
                userId: '83',
                typeOperation: 'INCOME',
                sum: 2064,
                createdAt: new Date()
            },
            {
                userId: '63',
                typeOperation: 'INCOME',
                sum: 8816,
                createdAt: new Date()
            },
            {
                userId: '26',
                typeOperation: 'INCOME',
                sum: 9468,
                createdAt: new Date()
            },
            {
                userId: '34',
                typeOperation: 'CONSUMPTION',
                sum: 7223,
                createdAt: new Date()
            },
            {
                userId: '3',
                typeOperation: 'CONSUMPTION',
                sum: 4810,
                createdAt: new Date()
            },
            {
                userId: '17',
                typeOperation: 'INCOME',
                sum: 1071,
                createdAt: new Date()
            },
            {
                userId: '55',
                typeOperation: 'CONSUMPTION',
                sum: 3725,
                createdAt: new Date()
            },
            {
                userId: '69',
                typeOperation: 'CONSUMPTION',
                sum: 5689,
                createdAt: new Date()
            },
            {
                userId: '46',
                typeOperation: 'INCOME',
                sum: 1235,
                createdAt: new Date()
            },
            {
                userId: '78',
                typeOperation: 'INCOME',
                sum: 6749,
                createdAt: new Date()
            },
            {
                userId: '85',
                typeOperation: 'INCOME',
                sum: 1442,
                createdAt: new Date()
            },
            {
                userId: '16',
                typeOperation: 'INCOME',
                sum: 1943,
                createdAt: new Date()
            },
            {
                userId: '62',
                typeOperation: 'CONSUMPTION',
                sum: 8846,
                createdAt: new Date()
            },
            {
                userId: '46',
                typeOperation: 'INCOME',
                sum: 3888,
                createdAt: new Date()
            },
            {
                userId: '87',
                typeOperation: 'CONSUMPTION',
                sum: 674,
                createdAt: new Date()
            },
            {
                userId: '66',
                typeOperation: 'INCOME',
                sum: 4141,
                createdAt: new Date()
            },
            {
                userId: 6,
                typeOperation: 'CONSUMPTION',
                sum: 9930,
                createdAt: new Date()
            },
            {
                userId: '93',
                typeOperation: 'CONSUMPTION',
                sum: 733,
                createdAt: new Date()
            },
            {
                userId: '18',
                typeOperation: 'INCOME',
                sum: 9875,
                createdAt: 'new Date()'
            },
            {
                userId: '18',
                typeOperation: 'CONSUMPTION',
                sum: 7978,
                createdAt: new Date()
            }
        ],
            {});

    },

    down: (queryInterface, Sequelize) => {

          return queryInterface.bulkDelete('TransactionHistory', null, {});

    }
};
