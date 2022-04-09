const express = require('express');
const deleteBookRouter = express.Router();
const Bookdata= require('../model/Authordata');

function router(nav){
    deleteBookRouter.get('/',function(req,res){//  the "/ "  is only needed to mention the /admin as it is already stored in app.use
        res.render("deletebook",{
            nav,
            title:'Library'
        })
    })



    
    //router to delete
    deleteBookRouter.get('/:id',(req,res)=>{
        const id = req.params.id;
        Bookdata.findByIdAndDelete(id,(err,docs)=>{
            if(!err){
                res.render('deletebook',{
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



    deleteBookRouter.post('/:id',function(req,res){
        const id = req.params.id;
        
        var updateditem = {
            name: req.body.name,
            books:req.body.books,
            genre:req.body.genre,
            image:req.body.image}
        

        Bookdata.deleteOne({_id:id},  (err)=>{
            if(!err){
                res.redirect('/authors');
            }
            else{
                console.log(err);
            }
        });
    });


    return deleteBookRouter;
}
module.exports = router;