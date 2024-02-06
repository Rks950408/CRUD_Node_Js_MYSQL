//import express module
//express module used to develop the Rest API'S
// import following module
//Express is used to develope  the rest api
// body parser: is used to cilent data
// cors :used to acess ports communication
// asign port 8080
// npm install express body-parser cors --save
// after that install alll three module.
// after that we did 
var express = require("express");

//import body-parser module
//body-parser module used to read the client data
var bodyparser = require("body-parser");

//import cors module
//cors module used to allow the ports communication
var cors = require("cors");

//create the Rest Object
//we must call express class constructor
var app = express();
//where "app" object used to develop the Rest API'S

app.use(bodyparser.json());
//bodyparser value convert in the json format
app.use(bodyparser.urlencoded({extended:false}));

//allow the cors
app.use(cors());

//import the fetch module
var fetch = require('./fetch/fetch');
app.use('/fetch',fetch);
// insert the module
var insert = require('./insert/insert');
app.use('/insert',insert);

// update the module

var update = require('./update/update');
app.use('/update',update);
// delete the module 
var remove = require('./delete/delete');
app.use('/delete',remove);
//assign the port no
app.listen(8080);
console.log("Server Listening the port no.8080");

