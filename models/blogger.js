const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'Last name is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 6,
        maxlength: 12
    },
    username: {
        type: String,
        trim: true,
        required: [true, 'Username is required'],
        unique: true
    },
    gender: {
        type: String,
        required: [true, 'Gender is required'],
        trim: true,
        enum: ['male', 'female'],
        default: 'male'
    },
    profileImage: {
        type: String,
        trim: true,
        unique: true
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true,
        minlength: 13,
        maxlength: 13
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: true
    }
})

module.exports = mongoose.model('Blogger', userSchema);