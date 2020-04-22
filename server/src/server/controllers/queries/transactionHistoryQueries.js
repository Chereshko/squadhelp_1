const bd=require('../../models');
const CONSTANTS = require('../../../constants');
const NotFound = require('../../errors/UserNotFoundError');

module.exports.getTransactionsByID = async(id) => {
    const transactions = await bd.TransactionHistory.findAll({
        where:{
           userId:id,
        }
    });
    if(transactions && transactions.length !== 0){
        return transactions;
    }
    throw new NotFound('There are no transactions by this ID');
}