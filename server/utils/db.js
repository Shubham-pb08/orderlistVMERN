const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connection to Mongo Successful");
        
    } catch (error) {
        console.error(error);
        process.exit(0);
    }    
}

module.exports = connectDB;