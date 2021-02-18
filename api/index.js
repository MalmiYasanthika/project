const express = require('express');
const app = express();
var mongoose = require('mongoose');

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration


//const profileRoute = require('./Routes/myprofileroute');
const inquiryRoute = require('./Routes/route');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Inquiry', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('connected to db!')
);

//Middle wares
app.use(express.json());

//Route Middle wares
//app.use('/user/profile', profileRoute);
app.use('/user',inquiryRoute);

app.use(function (req, res) {
    res.status(404).send({
        url: req.originalUrl + ' not found!'
    });
});

app.listen(5000, () => console.log('sever is running'));