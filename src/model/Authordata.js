const mongoose = require('mongoose');

//DATABASE CONNECTION
mongoose.connect('mongodb://localhost:27017/library');
//defining schema :giving complete structure for data we are storing

//SCHEMA DEFINITION
const  Schema =  mongoose.Schema;
//CREATING A SCHEMA USING NEW CONSTRUCTOR
const AuthorSchema = new Schema({
   
    author:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    genre:String,
    image:String


});
//MODEL CREATION
var Authordata = mongoose.model('Authordata',AuthorSchema);

module.exports = Authordata;
