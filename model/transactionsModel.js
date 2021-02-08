const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Our text for error']
    },
    amount: {
        type: Number,
        required: [true, 'Our text for error']
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('transaction', transactionSchema);




