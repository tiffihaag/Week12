//npm package to establish connection

var mysql;
mysql = require('mysql');
var connection = mysql.createConnection({
	host	: "localhost",
	port 	: 3306;
	user  	: "root",
	password: "root",
	database: "bamazon"
});

connection.connect(function(err) {
	if(err) {
		console.error("Error Connecting: " + err.stack);
		return;
	}
	console.log("Connected as id " + connection.threadId);
});

connection.query('SELECT * FROM _____', function(err, res) {
	for (var i = 0; i < res.length; i++) {
		console.log(res[i].id + " | " + res[i].____);		
	}
})	console.log("----------------------------");

connection.query('SELECT * FROM _____ WHERE __=__', ['____'], function(err, res) {
	for (var = 0; i <res.length; i++) {
		console.log(res[i].id + " | " + res[i].title);
	}
});

module.exports = connection;