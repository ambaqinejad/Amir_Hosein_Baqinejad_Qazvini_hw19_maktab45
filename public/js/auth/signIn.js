let username;
let password;

$(document).ready(function() {

    $('#signInForm').submit(function(e) {
        username = $('#username').val();
        password = $('#password').val();

        removeErrorText();
        removeErrorStyle();
        if (someEmptyValues()) {
            return false;
        }
        return true;
    });
});

const removeErrorText = () => {
    $('#passwordError').text('');
    $('#usernameError').text('');
}

const removeErrorStyle = () => {
    $('#password').removeClass('border border-danger');
    $('#username').removeClass('border border-danger');
}

const someEmptyValues = () => {
    let flag = false;
    if (!password) {
        $('#passwordError').text('Password is required.');
        $('#password').addClass('border border-danger');
        flag = true;
    }
    if (!username) {
        $('#usernameError').text('username is required.');
        $('#username').addClass('border border-danger');
        flag = true;
    }
    return flag;
}