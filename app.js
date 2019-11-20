const express = require('express');
const chalk = require('chalk');
const path = require('path');

var mongoose = require('mongoose');


const bodyparser = require('body-parser');      //body-parser module
const cors = require('cors');                   //cors module


const app = new express();


var nav = [
    {
        link: "/",
        title: "ADD"
    },

    {
        link: "/viewall",
        title: "VIEW ALL"

    },
    
    {
        link: "/search",
        title: "SEARCH"

    },

    {
        link: "/updel",
        title: "UPDATE/DELETE"

    }

    
];


const addRouter = require('./src/routes/addRoutes')(nav);
const viewallRouter = require('./src/routes/viewallRoutes')(nav);        
const updelRouter = require('./src/routes/upddelRoutes')(nav);
const searchRouter = require('./src/routes/searchRoutes')(nav);



app.use(express.static(path.join(__dirname, "/public")));


app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));


app.use('/add', addRouter);
app.use('/viewall', viewallRouter);
app.use('/updel', updelRouter);
app.use('/search', searchRouter);



mongoose.connect("mongodb+srv://akDb:hello12345@cluster0-cnapv.mongodb.net/test?retryWrites=true&w=majority")
// mongoose.connect("mongodb://localhost:27017/MyCollegeDb")       //for connecting to db using mongoose object.....
                                                                // 27017 mongodb port number
                                                                //MyCollegeDb Database name



app.set('views', './src/views');         
app.set('view engine', 'ejs');              





app.get('/', function (req, res) {           

    res.render('add',
        {
            nav,
            title: "ADD",
        });

});




app.listen(process.env.PORT || 4000, function () {

    console.log("Listening to port " + chalk.yellow('4000'));

});




