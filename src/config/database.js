const mysql = require('mysql');
const {promisify}=require('util');

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database:'test',
  port:8889
});
pool.getConnection((err,connection)=>{
  if(err){
    console.log(err);
    console.log('===========ERROR===============');
  }
  if(connection) connection.release();
  console.log('conctada');
  return;
})

pool.query = promisify(pool.query)
module.exports = pool;
