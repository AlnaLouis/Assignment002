const express = require('express');
const logRouter = express.Router();

function router(nav){
   logRouter.get('/',function(req,res){
      res.render("Login",{
         nav,
         
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
   
  
  return logRouter; 
}

module.exports = router;