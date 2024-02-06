var prop = require('./db_properties');

var mysql = require ('mysql');

module.exports = {
    getConnection : ()=>{
        return mysql.createConnection(prop);
    }
}

//import module 
//export the json object
// npm install mysql --save
// 


// Userif i did not connect then show this error
// Error: connect ECONNREFUSED 127.0.0.1:3306