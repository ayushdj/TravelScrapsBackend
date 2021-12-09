const express = require('express');
//const cors = require("cors");
//const fileUpload = require('express-fileupload');
const app = express();
//const initRoutes = require("./db/images/routes/index");

// const corsOptions = {
//     origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));
// app.use(express.urlencoded({ extended: true }));
// initRoutes(app);


// app.post('/upload', (req, res) => {
//     if (req.files === null) {
//         return res.status(400).json({ msg: 'No file uploaded' });
//     }
//
//     const file = req.files.file;
//
//     file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send(err);
//         }
//
//         res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
//     });
// });

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", 'http://localhost:3000');
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});



const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    cookie: {}
}));

const mongoose = require('mongoose');
const uri = "mongodb+srv://travelscraps:travelscraps@cluster0.vtkeo.mongodb.net/travelScraps?retryWrites=true&w=majority";
mongoose.connect(uri);

require('./db/carousel/service')(app);
require('./db/signUp/service')(app);
require('./db/countdown/service')(app);
require('./db/who/who-service')(app);
require('./db/scrapPosts/service')(app);
require('./db/calendar/service')(app);
require('./db/events/service')(app);
require('./db/comments/service')(app);
require('./db/users/user-controller')(app);
require('./db/weather/service')(app);
//require('./db/images/')

app.listen(process.env.PORT || 4000);
