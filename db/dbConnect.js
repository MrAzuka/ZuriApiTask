const mongoose = require('mongoose')
require('dotenv').config()
const {MONGO_URI}  = process.env


exports.connectDB = async () =>{
    try {
        mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log("Database is connected")
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}