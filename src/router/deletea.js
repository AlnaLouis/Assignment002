const express = require('express');
const deleteAuthorRouter = express.Router();
const Authordata= require('../model/Authordata');

function router(nav){
    deleteAuthorRouter.get('/',function(req,res){//  the "/ "  is only needed to mention the /admin as it is already stored in app.use
        res.render("newauthor",{
            nav,
            title:'Library'
        })
    })



    
    //router to delete
    deleteAuthorRouter.get('/:id',(req,res)=>{
        const id = req.params.id;
        Authordata.findByIdAndDelete(id,(err,docs)=>{
            if(!err){
                res.render('deletea',{
                    nav,
                    title:'Library',
                    author: docs 
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



    deleteAuthorRouter.post('/:id',function(req,res){
        const id = req.params.id;
        
        var updateditem = {
            name: req.body.name,
            books:req.body.books,
            genre:req.body.genre,
            image:req.body.image}
        

        Authordata.deleteOne({_id:id},  (err)=>{
            if(!err){
                res.redirect('/authors');
            }
            else{
                console.log(err);
            }
        });
    });


    return deleteAuthorRouter;
}
module.exports = router;