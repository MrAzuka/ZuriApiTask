const {Schema, model} = require('mongoose')

const dataSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    country: {type: String, required: true}
})

exports.data = model("Contact", dataSchema)