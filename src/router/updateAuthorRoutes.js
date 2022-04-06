const express = require('express');
const updateAuthorRouter = express.Router();

function router(nav){
    updateAuthorRouter.get('/',function(req,res){//  the "/ "  is only needed to mention the /admin as it is already stored in app.use
        res.render("updateauthor",{
            nav,
            title:'Library'
        })
    })
    return updateAuthorRouter;
}
module.exports = router;
