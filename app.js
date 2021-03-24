// Third party modules
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
require('dotenv').config();

// Nodejs modules
const path = require('path');

// My own modules
const dashboardRouter = require(path.join(__dirname, 'routes', 'dashboard.js'));
const authRouter = require(path.join(__dirname, 'routes', 'auth', 'auth.js'));
const homeRouter = require(path.join(__dirname, 'routes', 'home.js'));
const session = require(path.join(__dirname, 'tools', 'session.js'));

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
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({
    key: 'user_sid',
    secret: 'mySecretKey',
    saveUninitialized: false,
    resave: false,
    cookie: { expires: 600000 }
}))

// routes
app.use('/dashboard', session.loginChecker, dashboardRouter)
app.use('/auth', session.sessionChecker, authRouter)
app.use('/', homeRouter)

// running server
app.listen(serverPort, () => {
    console.log(`${process.env.SERVER_START_MESSAGE} ${serverPort}`);
});