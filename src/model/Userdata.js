//ACCESS THE MONGOOSE PACKAGE
const mongoose = require('mongoose');

//DATABASE CONNECTION
mongoose.connect('mongodb://localhost:27017/library');
//defining schema :giving complete structure for data we are storing

//SCHEMA DEFINITION
const Schema = mongoose.Schema;
//CREATING A SCHEMA USING NEW CONSTRUCTOR
const UserSchema = new Schema({
    name:String,
   lname :String,
    email:String,
    password:String,
    password2 :String
});
//MODEL CREATION
var Userdata = mongoose.model('Userdata',UserSchema);

module.exports = Userdata;