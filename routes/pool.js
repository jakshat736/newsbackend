var mysql=require('mysql')
var pools=mysql.createPool({

    host:'localhost',
    port:3306,
    user:'root',
    password:'2209',
    database:'dailynews',
    connectionLimit:100
})
module.exports = pools;