
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
const aadminRouter = express.Router();
const multer=require('multer');
const adminAuthorRouter=express.Router();
const fileStorageEngine=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/images")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'--'+file.originalname);
    }
})
const upload=multer({storage:fileStorageEngine})

const Authordata = require('../model/Authordata');

function router(nav){
    aadminRouter.get('/',function(req,res){//  the "/ "  is only needed to mention the /admin as it is already stored in app.use
        res.render("addauthor",{
            nav,
            title:'Library'
        })
    })
    
    // CHANGE "dminRouter.get('/add',function(req,res){"  "to dminRouter.post('/add',function(req,res){" as we are using post method
//adminRouter.get('/add',function(req,res){
    aadminRouter.post('/add',upload.single('image'),function(req,res){  
/*  res.send("Hey I am added");*/  /* this is to show a message in the screen while directing to /admin/add  */
  /*WE ARE COMMENTING THE OBJECT AND THE THREE LINES OF CODE BELOW TO USE POST METHOD*/
 //now we are deleting the commented thiis earlier and res.send()

 console.log(req.file);
  
    //IF we are using get method req.query is needed but if we are using post we can use req.params
    var item={
        title: req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        image:req.file.filename
    }
   
   
    /*title: req.query.title,
    author:req.query.author,
    genre: req.query.genre,
    image: req.query.image
   }*/
  var author=  Authordata(item);
  author.save();//saving to database
  res.redirect('/authors');


  //to check post method try again  the res.send('Hey I am added)
  /*res.send('Hey i am added');*/
  //after it we comment it again and uncommented  early commented things
})


    return aadminRouter;
}
module.exports = router;


