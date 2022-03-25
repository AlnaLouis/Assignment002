const express = require('express');
const bookRouter = express.Router();
function router(nav){
    var books =
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
    
    ];
    bookRouter.get('/',function(req,res){
        res.render("books",{
            nav,
            title:'Books',
            books
        
        });
    });
    
    bookRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render("book",{
            nav,
            title:'Book',
            book:books[id] 
        
        });
    });
   return bookRouter; 
}





module.exports = router;
