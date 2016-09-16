var db = require('./connection');
var prompt = require('./db');

//Database query 
db.query('SELECT * FROM products', function (error, results, fields){
	
	if (error) {
		console.log("Error: " + error);
		return
	}
	results.forEach(function(value) {
		console.log(value.ProductName + " | Price: $ " + value.Price + " | Qty: " + value.StockQuantity);
	});

	// Questions
	var inquire = require('inquirer');
	inquire.prompt([
	{
	  type: "input",
	  name: "pickItem",
	  message: "Which item would you like to purchase from the list above?",
	  choices: ["Paper Towels", "Toilet Paper", "Hand Soap", "Deodorant", "Diapers", "Wipes", "Kitchen Towels", "Pizza Pan", "Camera", "Headphones"]
	}
	]).then(function (user) {
	  console.log("You chose: " + user.pickItem);
	  var itemPicked = user.pickItem;
	}); //for inquirer function

	inquire.prompt([
	{
	  type: "input",
	  message: "How many would you like to purchase?",
	  name: "pickQty"
	}
	]).then(function (user) {
	  console.log("You selected: " user.pickQty);
	  var qtyPicked = user.pickQty;
	  
	  if (item quantity <= value.StockQuantity) {

	  }

	//upate the database of purchase
	// connection.query("UPDATE products SET itemPicked WHERE ?"), [{
	// 	ProductName: user.pickItem,
	// 	DepartmentName: value.DepartmentName,
	// 	Price: value.Price,
	// 	StockQuantity: value.StockQuantity - user.pickQty 
	// }], function(err, res) {});
	
	}); //for second question function

}); //for query

