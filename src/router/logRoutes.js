
/*
const express = require('express');
const adminRouter = express.Router();
 function routers(nav){
    adminRouter.get('/',function(req,res){
        res.render('addBook',{
            nav,
            title:'library'
    
        });
    });
    
    adminRouter.get('/add',function(req,res){
        res.send("Hey I am added");
    });
    
    return adminRouter;
 }
module.exports = routers; 

*/

const express = require('express');
const logRouter = express.Router();
//const Userdata = require('../model/Userdata');

function router(nav){
    logRouter.get('/',function(req,res){//  the "/ "  is only needed to mention the /admin as it is already stored in app.use
        res.render("login",{
            nav,
            title:'Login'
        });
    });
    
    // CHANGE "dminRouter.get('/add',function(req,res){"  "to dminRouter.post('/add',function(req,res){" as we are using post method
//adminRouter.get('/add',function(req,res){
    logRouter.post('/login',function(req,res){  
/*  res.send("Hey I am added");*/  /* this is to show a message in the screen while directing to /admin/add  */
  /*WE ARE COMMENTING THE OBJECT AND THE THREE LINES OF CODE BELOW TO USE POST METHOD*/
 //now we are deleting the commented thiis earlier and res.send()

 //
  
    //IF we are using get method req.query is needed but if we are using post we can use req.params
    var item={
      
        email:req.body.email,
        password:req.body.password
    }
   
   
    /*title: req.query.title,
    author:req.query.author,
    genre: req.query.genre,
    image: req.query.image
   }*/

  //res.redirect('/dashboard');
  

  //to check post method try again  the res.send('Hey I am added)
  /*res.send('Hey i am added');*/
  //after it we comment it again and uncommented  early commented things
})


    return logRouter;
}
module.exports = router;




