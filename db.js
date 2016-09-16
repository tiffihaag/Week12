// var db = require('./connection');
// var inquire = require('inquirer');

// // Create a "Prompt" with a series of questions.
// 	inquire.prompt([
// 	{
// 	  type: "checkbox",
// 	  name: "pickItem",
// 	  message: "Which item would you like to purchase from the list above?",
// 	  choices: []
// 	}
// 	]).then(function (user) {
// 	  console.log(user.pickItem);
// });




//dbOptions = dbOptions + ',"' + value.ProductName + '"';

// db.query('SELECT ProductName FROM products', function (error, results, fields){

// 	if (error) {
// 		console.log("Error: " + error);
// 		return;
// 	}
	
// 	results.forEach(function(value) {
// 		dbOptions = dbOptions + ',"' + value.ProductName + '"';
// 	});
// 	//console.log(dbOptions);
// });

// 	//Prompt the user
// 	var inquire = require('inquirer');

	// inquire.prompt([
	// {
	//   type: "input",
	//   message: "Which item would you like to purchase from the list above?",
	//   name: "pickItem"
	// }
	// ]).then(function (user) {
	//   console.log("You selected: " + user.pickItem);
	// });

	// inquire.prompt([
	// {
	//   type: "input",
	//   message: "How many would you like to purchase?",
	//   name: "pickQty"
	// }
	// ]).then(function (user) {
	//   console.log("You selected: " user.pickQty);
	// }

	// //if statement to check qty available
	// if (true) {}

	// //upate the database of purchase
	// connection.query("UPDATE products SET ? WHERE ?"), [{
	// 	ProductName: user.pickItem,
	// 	DepartmentName: 
	// 	Price:
	// 	StockQuantity:
	// }], function(err, res) {});


// connection.query('SELECT * FROM products', function(err, res) {
// 	for (var i = 0; i < res.length; i++) {
// 		console.log(res[i].id);		
// 	}
// });	

// connection.query('SELECT * FROM _____ WHERE __=__', ['____'], function(err, res) {
// 	for (var = 0; i < res.length; i++) {
// 		console.log(res[i].id + " | " + res[i].title);
// 	}
// });

//});
