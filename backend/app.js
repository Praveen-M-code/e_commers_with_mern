const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/connectDatabase');

dotenv.config({path: path.join(__dirname, 'config', 'config.env')});

const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');

connectDatabase();
app.use('/api/v1', productRoute);
app.use('/api/v1', orderRoute);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})