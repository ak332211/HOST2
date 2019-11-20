var express = require('express');
var updelRouter = express.Router();


function router(nav) {
    updelRouter.route('/')
        .get(function (req, res) {
            res.render('updel',
                {
                    nav,
                    title: "Update/Delete",

                });
        })


    return updelRouter;
}

module.exports = router;