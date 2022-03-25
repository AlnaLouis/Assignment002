const express = require('express');
const authRouter = express.Router();
function router1(nav){
    var authors =
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
            img:"rowling.jpg"
        },
        {
            title:'Harry Potter',
            author:'J.K Rowling',
            genre:'Fantasy',
            img:"a.jpg"
        }
    
    ];
    
    authRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title:'Authors',
            authors
        
        });
    });
    
    authRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render("author",{
            nav,
            title:'Author',
            author:authors[id]
        
        });
    });
   return authRouter; 
}





module.exports = router1;
