const {Schema, model} = require('mongoose')

const dataSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    country: String
})

exports.data = model("Contact", dataSchema)