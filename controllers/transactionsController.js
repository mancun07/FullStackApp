const Transaction = require('../model/transactionsModel');

// @desc Get all transactions
// @route GET api/v1/transactions
// @access Public

const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    }
   catch (err) {
        return res.status(500).json({
            success: false,
            error: 'server error'
        })
   }

}

const addTransaction = async (req, res) => {
    try {
        const newTransaction = await Transaction.create(req.body)

        return res.status(201).json({
            success: true,
            data: newTransaction
        })
    }

    catch(err) {
        if(err.name === 'ValidationError')  {     
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            })


        } else {
            return res.status(500).json({
                success: false,
                error: 'server error'
            })
        }

    }
}

const deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);
        
        if(!transaction) {
            return res.status(404).json({
                success: false,
                error: 'transaction not found'
            })
        }

        return res.status(200).json({
            success: true,
            data: {}
        })

    }
   catch (err) {
        return res.status(500).json({
            success: false,
            error: 'server error'
        })
   }
}

module.exports = {
    getTransactions,
    deleteTransaction,
    addTransaction
}
