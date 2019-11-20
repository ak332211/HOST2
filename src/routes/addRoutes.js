var express = require('express');

var {studentModel} = require('../models/studentModel')  


var addRouter = express.Router();


function router(nav) {
    addRouter.route('/')
        .post(function (req, res) {

            var student = new studentModel(req.body);       //created an object for the class studentModel(the model class)
            // student.save();                                 //using that object save to model db
            
            student.save( (error, data)=>{                   

                if(error)
                {

                    // res.send(error);
                    res.json({"status":"eror"});
                    // throw error;

                }

                else{
                    res.json({"status":"success"});
                }
                
            });                                   

            // // console.log(req.body);
            // res.send(req.body);
        })


    return addRouter;
}

module.exports = router;