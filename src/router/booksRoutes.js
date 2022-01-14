const express = require('express');
const bookRouter = express.Router();
function router(nav){
    var books =
    [
        {
            work:'Tom and Jerry',
            name:'Joseph Barbara',
            genre:'Cartoon',
            img:"food.jpg"
        },
        {
            work:'Pathumayude Aadu',
            name:'Basheer',
            genre:'Drama',
            img:"path.jpg"
        },
        {
            work:'Harry Potter',
            name:'J.K Rowling',
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
