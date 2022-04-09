const express = require('express');
const updateAuthorRouter = express.Router();
const Authordata= require('../model/Authordata');

function router(nav){
    updateAuthorRouter.get('/',function(req,res){//  the "/ "  is only needed to mention the /admin as it is already stored in app.use
        res.render("newauthor",{
            nav,
            title:'Library'
        })
    })


    // route to show update element
    updateAuthorRouter.get('/:id',function(req,res){
        const id = req.params.id;
        
        Authordata.findById(id,function(err,doc){
            if(!err){
                res.render('newauthor',{
                    nav,
                    title:'Library',
                    author: doc 
                });
            }
            else{
                console.log(err);
            }
        });
    });
    
    //router to delete
    updateAuthorRouter.get('/:id',(req,res)=>{
        const id = req.params.id;
        Authordata.findByIdAndDelete(id,(err,docs)=>{
            if(!err){
                res.render('deletea',{
                    nav,
                    title:'Library',
                    author: doc 
                });
            }
            else{
                console.log(err);
            }
            /*if(err){
                console.log("Something went wrong while deleting the data");
                next(err);
            }
            else{
                console.log("deleted sucessfully");
                res.redirect('/');

            }*/
        })
    })



    updateAuthorRouter.post('/:id',function(req,res){
        const id = req.params.id;
        
        var updateditem = {
            name: req.body.name,
            books:req.body.books,
            genre:req.body.genre,
            image:req.body.image}
        

        Authordata.updateOne({_id:id},  (err)=>{
            if(!err){
                res.redirect('/authors');
            }
            else{
                console.log(err);
            }
        });
    });


    return updateAuthorRouter;
}
module.exports = router;