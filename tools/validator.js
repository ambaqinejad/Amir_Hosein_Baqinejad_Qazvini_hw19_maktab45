const someEmptyValues = (req, res, next) => {
    if (!req.body.firstName.trim) {

    }
    if (!lastName) {

    }
    if (!password) {

    }
    if (!username) {

    }
    if (!email) {

    }
    if (!phone) {

    }
    if (!gender) {

    }
    return next();
}

const badPhoneLength = () => {
    if (phone.length !== 10) {
        $('#phoneError').text('Phone number must have 10 characters.');
        $('#phone').addClass('border border-danger');
        return true;
    }
    return false;
}

const badPasswordLength = () => {
    if (password.length > 12 || password.length < 6) {
        $('#passwordError').text('Password must have at least 6 and at most 12 characters.');
        $('#password').addClass('border border-danger');
        return true;
    }
    return false;
}

const invalidEmail = () => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
        $('#emailError').text('Please enter a valid email address.');
        $('#email').addClass('border border-danger');
        return true;
    }
    return false;
}