var express = require('express');
var viewallRouter = express.Router();


var {studentModel} = require('../models/studentModel')  


function router(nav) {
    viewallRouter.route('/')
        .get(function (req, res) {
            res.render('viewall',
                {
                    nav,
                    title: "View All",

                });
        })


    viewallRouter.get('/viewAllapi', (req, res)=>{
        studentModel.find( (error, data)=>{

        if(error)
        {
            throw error;
        }
        else{
            res.send(data);
        }

        })
    })


    return viewallRouter;
}

module.exports = router;