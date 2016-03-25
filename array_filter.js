function getStocksOver(stocks,minPrice){
	return stocks.filter(function(something){
		return something.price >= minPrice;
	})
};


//this is unused but show how the predicate is used with filter
// Array.prototype.filter = function (predicate) {
// 	 var results = [];
// 	 this.forEach(function(item){
// 	 	if (predicate(item)){
// 	 		results.push(item);
// 	 	}
// 	 });
// 	 return results;
// };

var expensiveStocks = getStocksOver(
	[
		{symbol:"XFX",price:240.00,volume:23432},
		{symbol:"TNZ",price:332.00,volume:234},
		{symbol:"JXJ",price:120.00,volume:5323}
	],
	150.00);

console.log(JSON.stringify(expensiveStocks));
