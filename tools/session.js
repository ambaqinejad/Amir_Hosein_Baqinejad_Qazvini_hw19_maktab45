const path = require('path');

const redirect = require(path.join(__dirname, 'redirection.js'));

const session = {
    sessionChecker: (req, res, next) => {
        if (req.cookies.user_sid && req.session.blogger) {
            return res.redirect('/dashboard');
        } else {
            return next()
        }
    },

    loginChecker: (req, res, next) => {
        if (!req.session.blogger) {
            return redirect(res, '/auth/signIn', 'Please Login first.')
        } else {
            return next();
        }
    }
}

module.exports = session;