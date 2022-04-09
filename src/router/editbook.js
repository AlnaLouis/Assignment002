const express = require('express');
const editBookRouter = express.Router();
const Bookdata= require('../model/Bookdata');

function router(nav){
    editBookRouter.get('/',function(req,res){//  the "/ "  is only needed to mention the /admin as it is already stored in app.use
        res.render("ebook",{
            nav,
            title:'Library'
        })
    })


    // route to show update element
    editBookRouter.get('/:id',function(req,res){
        const id = req.params.id;
        
        Bookdata.findById(id,function(err,doc){
            if(!err){
                res.render('ebook',{
                    nav,
                    title:'Library',
                    book: doc 
                });
            }
            else{
                console.log(err);
            }
        });
    });
    
    //router to delete
    editBookRouter.get('/:id',(req,res)=>{
        const id = req.params.id;
        Bookdata.findByIdAndDelete(id,(err,docs)=>{
            if(!err){
                res.render('deleteb',{
                    nav,
                    title:'Library',
                    book: doc 
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



    editBookRouter.post('/:id',function(req,res){
        const id = req.params.id;
        
        var updateditem = {
            name: req.body.name,
            books:req.body.books,
            genre:req.body.genre,
            image:req.body.image}
        

        Bookdata.updateOne({_id:id},  (err)=>{
            if(!err){
                res.redirect('/books');
            }
            else{
                console.log(err);
            }
        });
    });


    return editBookRouter;
}
module.exports = router;