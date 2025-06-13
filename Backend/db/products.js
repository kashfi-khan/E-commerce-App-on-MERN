const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    
    userId : String,
    name : String,
    category : String,
    price : String,
    company : String
})

module.exports = mongoose.model("products", productSchema)