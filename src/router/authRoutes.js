const express = require('express');
const AuthRouter = express.Router();
const Authordata = require('../model/Authordata');
function router(nav){
  /*var authors =
    [
        {
            title:'Tom and Jerry',
            author:'Joseph Barbara',
            genre:'Cartoon',
            img:"food.jpg"
        },
        {
            title:'Pathumayude Aadu',
            author:'Basheer',
            genre:'Drama',
            img:"path.jpg"
        },
        {
            title:'Harry Potter',
            author:'J.K Rowling',
            genre:'Fantasy',
            img:"a.jpg"
        }
    
    ];*/
    AuthRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors",{
                nav,
                title:'Authors',
                authors
            
            });
        })
       
    });
    
    AuthRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render("author",{
                nav,
                title:'Author',
                author 
            
            });
        })
        
    });
   return AuthRouter; 
}





module.exports = router;
