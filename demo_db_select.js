var mysql = require('mysql');
require('dotenv/config')

var con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM " + "fieDb" + ".Contracts", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        con.end();
    });
});
