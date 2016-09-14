var db = require('./connection');
var fs = require("fs");
var inquire = require('inquirer');

db.query('SELECT * FROM bamazon', function (error, results, fields){

	if (error) {
		console.log("Error: " + error);
		return;
	}
	results.forEach(function(value) {
		console.log(value);
	}
});

	inquire.prompt([
	{
	  type: "input",
	  message: "Which item would you like to purchase from the list above?",
	  name: "pickItem"
	}
	]).then(function (user) {
	  console.log("You selected: " user.pickItem);
	}

	inquire.prompt([
	{
	  type: "input",
	  message: "How many would you like to purchase?",
	  name: "pickQty"
	}
	]).then(function (user) {
	  console.log("You selected: " user.pickQty);
	}

	
});
