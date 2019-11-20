var mongoose = require('mongoose');

var studentModel = mongoose.model('Students', {
    name:String,
    admno:Number,
    rno:Number,
    college:String
    
})

module.exports = {studentModel}