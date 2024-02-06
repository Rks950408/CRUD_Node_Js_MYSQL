var con = require('../db_connection');
// conneection json object access and connect to db.
var connection = con.getConnection();
connection.connect();
// express module import 
var express = require('express');
// create the router instance how create the instance with the help of rest api
var router = express.Router();
// if query is present sucess if error it will give err
router.get('/',(req,res)=>{
    connection.query('select * from employees',(err,array,feilds)=>{
        res.send(array);
    });
});
module.exports = router;
// import following module 
// connection.js
// express used to debelop api
// create rst api
// export module 