var express = require('express');
var searchRouter = express.Router();


function router(nav) {
    searchRouter.route('/')
        .get(function (req, res) {
            res.render('search',
                {
                    nav,
                    title: "Search",

                });
        })


    return searchRouter;
}

module.exports = router;