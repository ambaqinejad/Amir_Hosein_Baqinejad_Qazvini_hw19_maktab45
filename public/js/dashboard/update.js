let firstName;
let lastName;
let username;
let password;
let email;
let phone;
let gender;

$(document).ready(function() {

    $('#updateForm').submit(function(e) {

        firstName = $('#firstName').val();
        lastName = $('#lastName').val();
        username = $('#username').val();
        password = $('#password').val();
        email = $('#email').val();
        phone = $('#phone').val();
        gender = $('input[name="gender"]:checked').val();

        console.log(firstName, lastName, username, password, email, phone, gender);
        removeErrorText();
        removeErrorStyle();
        if (password && badPasswordLength()) {
            return false
        }
        if (email && invalidEmail()) {
            console.log('whyyyyyy');
            return false;
        }
        if (phone && badPhoneLength()) {
            return false;
        }
        if (phoneIsNaN()) {
            return false;
        }
        return true;
    });
});

const removeErrorText = () => {
    $('#firstNameError').text('');
    $('#lastNameError').text('');
    $('#passwordError').text('');
    $('#usernameError').text('');
    $('#emailError').text('');
    $('#phoneError').text('');
    $('#genderError').text('');
}

const removeErrorStyle = () => {
    $('#firstName').removeClass('border border-danger');
    $('#lastName').removeClass('border border-danger');
    $('#password').removeClass('border border-danger');
    $('#username').removeClass('border border-danger');
    $('#email').removeClass('border border-danger');
    $('#phone').removeClass('border border-danger');
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

const phoneIsNaN = () => {
    if (isNaN(+phone)) {
        $('#phoneError').text('Phone number must be digits.');
        $('#phone').addClass('border border-danger');
        return true;
    }
    return false;
}