var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  // User ID
  uid: {
    type: String,
    unique: true
  },
  // display name
  status: {
    type: Number
  }
}, {
  // define this collection's name explicitly
  collection: "users"
});

module.exports = mongoose.model('User', User);