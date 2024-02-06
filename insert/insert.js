var con = require("../db_connection");
// connect to mysql acess the
var connection = con.getConnection();
connection.connect();
// import the express module
var express = require("express");
// create router instance 
var router = express.Router();
// insert the data show we write post
// we not using front end so that i give eid and all.
router.post("/",(req,res)=>{
    var e_id = req.body.e_id;
    var e_name = req.body.e_name;
    var e_sal = req.body.e_sal;
    // query to inserrt the value 
    connection.query("insert into employees values("+e_id+",'"+e_name+"',"+e_sal+")",
                    (err,result)=>{
        if(err){
            // insert the json obj so thats why curly braces
            res.send({"insert":"fail"});
        }else{
            res.send({"insert":"success"});
        }
    }); 
});
// export the module after that go the server.js
module.exports = router;