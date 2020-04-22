'use strict';

module.exports = (sequelize, DataTypes) => {
    const Transactions = sequelize.define('TransactionHistory', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            },
            typeOperation: {
                type: DataTypes.ENUM('INCOME', 'CONSUMPTION'),
                allowNull: false,
            },
            sum: {
                type: DataTypes.DECIMAL,
                allowNull: false,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id',
                },
            },
        },
        {
            timestamps: false,
        });

    Transactions = function (models) {
        Transactions.belongsTo(models.User, {
            foreignKey: userId,

        });
    };

    return Transactions;
};