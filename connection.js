//npm package to establish connection

var mysql = require('mysql');

var connection = mysql.createConnection({
	host	: "localhost",
	port 	: 3306,
	user  	: "root",
	password: "",
	database: "bamazon"
});

connection.connect(function(err) {
	if(err) {
		console.error("Error Connecting: " + err.stack);
		return;
	}
	//This id totally works, just don't need it right now
	//console.log("Connected as id " + connection.threadId);
});

module.exports = connection;