const mongoose = require('mongoose')



const regSchema = mongoose.Schema({
  username: String,
  password: String,
  oldPassword: String,
  newPassword: String,
  confirmPassword: String

})


module.exports = mongoose.model('reg', regSchema)