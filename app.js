const express = require('express');
const mongoose = require('mongoose');
let app = express();
var path = require("path");
const bodyParser = require('body-parser');
var db = mongoose.connect("mongodb://vijay:vijay123@ds131313.mlab.com:31313/student",{ useNewUrlParser: true });

process.env.PWD = process.cwd();

app.set('views', path.join(process.env.PWD, 'public'));

app.use('/swagger',express.static(path.join(process.env.PWD, 'public')));

var studentRouting = require('./student/studentRouting');



app.use('/student',studentRouting)
app.use(bodyParser.text({type: 'text/xml'}));
app.set('json spaces', 40);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,application/json, Accept,x-access-token");
    next();
});

var port = process.env.PORT || (3000);
app.listen(port, () => console.log(`Running on localhost:3000`));
