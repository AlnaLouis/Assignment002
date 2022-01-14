const express = require('express');
const authRouter = express.Router();
function router1(nav){
    var authors =
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
            img:"rowling.jpg"
        },
        {
            work:'Harry Potter',
            name:'J.K Rowling',
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
