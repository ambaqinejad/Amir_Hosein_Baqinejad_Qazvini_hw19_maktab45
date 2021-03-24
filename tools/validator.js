const path = require('path');

const redirect = require(path.join(__dirname, 'redirection.js'));

const isNotEmpty = (elName, url) => {
    return (req, res, next) => {
        if (!req.body[elName]) {
            return redirect(res, url, `${elName} can not be empty.`);
        }
        return next();
    }
}

const isLength = (elName, lengthObject, url) => {
    return (req, res, next) => {
        if (req.body[elName] && (req.body[elName].length > lengthObject.max ||
                req.body[elName].length < lengthObject.min)) {
            return redirect(res, url, `${elName} length is invalid.`);
        }
        return next();
    }
}

const isNumber = (elName, url) => {
    return (req, res, next) => {
        if (req.body[elName] && isNaN(+req.body[elName])) {
            return redirect(res, url, `${elName} must be digits.`);
        }
        return next();
    }
}

const isEmail = (elName, url) => {
    return (req, res, next) => {
        const re = /\S+@\S+\.\S+/;
        if (req.body[elName] && !re.test(req.body[elName])) {
            return redirect(res, url, 'Email is not valid.')
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