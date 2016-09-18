var db = require('./connection');
var fs = require('fs');

var pick = null;
var productsValue = []; //push array values here
var productsQty = []; //push array values here
var counter = 0;
var itemPicked;
var qtyPicked;

//Database query 
db.query('SELECT * FROM products', function (error, results, fields){
	
	if (error) {
		console.log("Error: " + error);
		return
	}
	results.forEach(function(value) {
		console.log(value.ProductName + " | Price: $ " + value.Price + " | Qty: " + value.StockQuantity);
		
		productsValue[counter] = value.ProductName;
		productsQty[counter] = value.productsQty;
		counter = counter + 1;
	}); //for value function
}); //for query

	// Questions
	var inquire = require('inquirer');
	inquire.prompt([
	{
	  type: "input",
	  name: "pickItem",
	  message: "Which item would you like to purchase from the list below?",
	  choices: [productsValue]
	}
	]).then(function (user) {
	  console.log("You chose: " + user.pickItem);
	  var itemPicked = user.pickItem;
	  
		inquire.prompt([
		{
		  type: "input",
		  message: "How many would you like to purchase?",
		  name: "pickQty"
		}
		]).then(function (user) {
		  console.log("You selected: " + user.pickQty + " of " + itemPicked);
		  var qtyPicked = user.pickQty;
		  }); //for user function
		}); //for inquirer value function

  	for (var i = 0; i < productsValue.length; i++) {
  		if (itemPicked == productsValue[i] && qtyPicked <= productsQty[i]) {
  			console.log("Looks like we have the item(s) you're looking for.");
  		};
  	}; 

	//upate the database of purchase
	db.query('UPDATE products SET ? WHERE ?', [{
		StockQuantity: productsQty[i] - qtyPicked 
		},
		{
			ProductName: itemPicked 
		}], function(err, res) {
			console.log("You've successfully placed your order.");
		});



