const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://mancun07:1234@cluster0.op8yb.mongodb.net/FIRST_FULLSTACK?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log('Mongo DB is connected')
    }
    catch (err) {
        console.log(`error: ${err.message}`)
    }
}

module.exports = connectDB;


