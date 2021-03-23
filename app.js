// Third party modules
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// Nodejs modules
const path = require('path');

// My own modules


// database initialization
mongoose.connect(`${process.env.DB_HOST}${process.env.DB_PORT}/${process.env.DB_NAME}`, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log(process.env.DB_CONNECTION_ERROR);
    } else {
        console.log(process.env.DB_CONNECTION_SUCCESS);
    }
})

// server initialization
const app = express();
app.set('view engine', process.env.SERVER_VIEW_ENGINE);
app.set('views', process.env.SERVER_VIEW_FOLDER);
const serverPort = process.env.SERVER_PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// running server
app.listen(serverPort, () => {
    console.log(`${process.env.SERVER_START_MESSAGE} ${serverPort}`);
});