const mongoose = require("mongoose")
const costumeSchema = mongoose.Schema({
name: String,
expertise: String,
age: Number
})
module.exports = mongoose.model("author", costumeSchema)