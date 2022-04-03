const express = require('express');
const bookRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav){
  /* var books =
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
    bookRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title:'Books',
                books
            
            });
        })
       
    });
    
    bookRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render("book",{
                nav,
                title:'Book',
                book 
            
            });
        })
        
    });
   return bookRouter; 
}





module.exports = router;
