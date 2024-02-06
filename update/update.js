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
    connection.query("update employees set e_name='"+e_name+"',e_sal="+e_sal+" where e_id="+e_id,
                    (err,result)=>{
        if(err){
            res.send({"update":"fail"});
        }else{
            res.send({"update":"success"});
        }
    });
});

module.exports = router;


