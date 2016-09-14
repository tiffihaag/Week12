var db = require('./connection');

db.query('SELECT * FROM 'bamazon', function (error, results, fields){
	
	if (error) {
		console.log("Error: " + error);
		return
	}
	results.forEach(function(value) {
		console.log(value);
	});
});