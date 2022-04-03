const express = require('express');
const signRouter = express.Router();
const Userdata = require('../model/Userdata');
function router(nav){
   signRouter.get('/',function(req,res){
      res.render("signin",{
         nav,
         title:'Signin'
         
      });
   });
   
   /*authRouter.get('/',function(req,res){
      res.render("authors",{
         nav:[{link:'./books',name:'Book'},{link:'./authors',name:'Authors'}],
         title:'Alna'
      });
   });*/
   /*bookRouter.get('/single',function(req,res){
      res.send("hey I am a single book");
   });*/
   
   //while accessing something from the  url use colon infront of it we can use any name other name than i like id
   signRouter.post('/signin',function(req,res){ 
      var item={
         name: req.body.name,
         lname:req.body.lname,
         email:req.body.email,
         password1:req.body.password1,
         password2:req.body.password2
     }
     var user=  Userdata(item);
     user.save();//saving to database
     res.redirect('/dashboard');
   })
   
    
  
  return signRouter; 
}

module.exports = router;