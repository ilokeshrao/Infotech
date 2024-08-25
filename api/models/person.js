const mongoose = require('mongoose')


const personSchema = mongoose.Schema({
   Username: String,
    email: String
})





module.exports = mongoose.model('person',personSchema)