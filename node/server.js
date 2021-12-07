const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
const uri = "mongodb+srv://travelscraps:travelscraps@cluster0.vtkeo.mongodb.net/travelScraps?retryWrites=true&w=majority";
mongoose.connect(uri);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});



require('./db/carousel/service')(app);
require('./db/signUp/service')(app);
//require('./db/persons/service')(app);
require('./db/countdown/service')(app);
require('./db/who/who-service')(app);
require('./db/scrapPosts/service')(app);
require('./db/calendar/service')(app);
require('./db/events/service')(app);
require('./db/comments/service')(app);
require('./db/weather/service')(app);

app.listen(process.env.PORT || 4000);
