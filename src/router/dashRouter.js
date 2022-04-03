const express = require('express');
const dashRouter = express.Router();


function router(nav){
    dashRouter.get('/',function(req,res){//  the "/ "  is only needed to mention the /admin as it is already stored in app.use
        res.render("dashboard",{
            nav,
            title:'Library'
        })
    })
    
    return dashRouter;
}
module.exports = router;