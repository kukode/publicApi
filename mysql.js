/**
 * @description CRUD data mysql with node js
 */

const mysql = require('mysql')
const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "develop93",
    database : "dbuser"

})
connection.connect();

// get data
connection.query('select * from tm_user',function(error,results,fields){
    if(error)  throw error ;
    
    console.log('hasil ', results)

})

// insert data
let post = {"username" : "dono","password" : "9999"}
connection.query("insert into tm_user set ?",post,function(error,results,fields){
    if(error) throw error;
})

//delete data
connection.query('delete from tm_user where username="dono"',function(error,results,fields){
    if(error) throw error;
    console.log('sukses hapus')
})

// edit data
connection.query('update tm_user set username="ari",password="99009" where id_user="1"',function(error,results,fields){
    if(error) throw error;
    console.log("update sukses")
})

connection.end()