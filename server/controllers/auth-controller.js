const User = require('../models/user-model');
const bcrypt = require('bcrypt');

const home = async (req, res) => {
    try {
        res.status(200).send("Home has been sent");
    }
    catch (err) {
        console.error(err);
    }
}

const signup = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const userExists = await User.findOne({email})

        if( userExists) {
            return res.status(200).json({msg: "Email already exists"});
        }

        const userCreated = await User.create({username,email,password});

        res.status(201).json({
            msg: "Registration Successful", 
            token: await userCreated.generateToken(), 
            userID: userCreated._id.toString()}
        );
    }
    catch (err) {
        next(err);
    }
}

const login = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const userExist = await User.findOne({email});

        if(!userExist) {
            return res.status(400).json({message: "Invalid Credentials"});
        }

        const validUser =  await bcrypt.compare(password, userExist.password);

        if(validUser) {
            res.status(200).json({
                msg: "Login Successful", 
                token: await userExist.generateToken(), 
                userID: userExist._id.toString()}
            );
        }
        else {
            res.status(401).json({message: "INVALID CREDENTIALS"});
        }

        res.status(200).send("login has been sent");
    }
    catch (err) {
        // res.status(500).json("Internal server error");
        next(err);
    }
}

module.exports = {home,signup,login};