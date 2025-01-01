const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

userSchema.pre('save',async function (){
    if(!this.isModified("password")) {
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(this.password, saltRound);
        this.password = hashPassword;
    }
    catch(err){
        console.error(err);
        next(err);
    }
    
});

// JSON web token

userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "1d"
        })
    }
    catch (err) {
        console.error(err);
        
    }
}

const User = new mongoose.model('User', userSchema);

module.exports = User;