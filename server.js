const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');


dotenv.config({path: './config/config.env'})
const transactionRoutes = require('./routes/transactionRoutes')

const app = express();
app.use(express.json());

connectDB();

app.use('/api/v1/transactions', transactionRoutes)

if (process.env.NODE_MODE === 'production') {

    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));

}




const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`The server is working on PORT ${PORT} on the ${process.env.NODE_MODE} mode`))



