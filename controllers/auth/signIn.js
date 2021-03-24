// nodejs modules
const path = require('path');

// third party modules
const bcrypt = require('bcrypt');

// my own modules
const Blogger = require(path.join(process.cwd(), 'models', 'blogger.js'));
const redirect = require(path.join(process.cwd(), 'tools', 'redirection.js'));


const getSignInPage = (req, res, next) => {
    res.render(path.join('auth', 'signIn.ejs'), {
        title: 'SignIn',
        message: req.query.message || ''
    });
}

const loginProcess = (req, res, next) => {
    Blogger.findOne({ username: req.body.username }, (err, blogger) => {
        if (err) {
            return redirect(res, '/auth/signIn', 'Something went wrong.');
        }
        if (!blogger) {
            return redirect(res, '/auth/signIn', 'User does not exist.');
        }
        bcrypt.compare(req.body.password, blogger.password, (err, same) => {
            if (err) {
                return redirect(res, '/auth/signIn', 'Something went wrong.');
            }
            if (!same) {
                return redirect(res, '/auth/signIn', 'User does not exist.');
            }
            req.session.blogger = blogger;
            return res.redirect('/dashboard');
        })
    })
}

module.exports = {
    getSignInPage,
    loginProcess
}