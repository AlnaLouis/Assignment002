const express = require('express');
const signRouter = express.Router();

function router(nav){
   signRouter.get('/',function(req,res){
      res.render("signin",{
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
   
  
  return signRouter; 
}

module.exports = router;