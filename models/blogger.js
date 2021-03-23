const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    }
})