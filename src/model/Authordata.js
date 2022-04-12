const mongoose = require('mongoose');

//DATABASE CONNECTION
//mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect('mongodb+srv://jesus333:jesuslove@libraryapp.90dgo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');


//defining schema :giving complete structure for data we are storing

//SCHEMA DEFINITION
const  Schema =  mongoose.Schema;
//CREATING A SCHEMA USING NEW CONSTRUCTOR
const AuthorSchema = new Schema({
   
    title:String,
    author:String,
    genre:String,
    image:
    {
        data:Buffer,
        content:String
    }

});
//MODEL CREATION
var Authordata = mongoose.model('Authordata',AuthorSchema);

module.exports = Authordata;
