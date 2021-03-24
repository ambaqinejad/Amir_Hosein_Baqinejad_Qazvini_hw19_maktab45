const path = require('path');

const redirect = require(path.join(__dirname, 'redirection.js'));

const isNotEmpty = (elName) => {
    return (req, res, next) => {
        if (!req.body[elName]) {
            return redirect(res, '/auth/signUp', `${elName} can not be empty.`);
        }
        return next();
    }
}

const isLength = (elName, lengthObject) => {
    return (req, res, next) => {
        if (req.body[elName].length > lengthObject.max ||
            req.body[elName].length < lengthObject.min) {
            return redirect(res, '/auth/signUp', `${elName} length is invalid.`);
        }
        return next();
    }
}

const isNumber = (elName) => {
    return (req, res, next) => {
        if (isNaN(+req.body[elName])) {
            return redirect(res, '/auth/signUp', `${elName} must be digits.`);
        }
        return next();
    }
}

const isEmail = (elName) => {
    return (req, res, next) => {
        const re = /\S+@\S+\.\S+/;
        if (!re.test(req.body[elName])) {
            return redirect(res, '/auth/signUp', 'Email is not valid.')
        }
        return next();
    }
}

module.exports = {
    isNotEmpty,
    isLength,
    isEmail,
    isNumber
}