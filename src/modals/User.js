
const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required : true,
        trim : true
    },
    age: {
        type: Number,
        required : true,
        validate(age){
            if(age < 0) throw new Error('Age must be a positive number')
        },
        default : 0
    },
    email :{
        type : String,
        validate(email){
            if(!validator.isEmail(email)) throw new Error('Email not valid')
        },
        lowercase : true,
        trim : true
    },
    password:{
        required : true,
        type : String,
        validate(password){
            if( password.toLowerCase().includes('password')) throw new Error('Password cannot contain password')
        },
        minlength : 7,
        trim:true
    }
})

module.exports = User