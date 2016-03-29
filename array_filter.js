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


function destroyer(arr) {
  // Remove all the values
  var newArray = [];
  var arg1;
  var arg2;
  var arg0 = arguments[0];
  console.log(arguments[0].length,' is length of arg0');
  for (var i = 0; i< arguments[0].length;i++){
    //if (arr[0].indexof(arr[1])){
    console.log('index in loop:',i);
    arg1 = arguments[1];
    arg2 = arguments[2];
    //console.log('args in loop',arguments[0],arguments[1],arguments[2]);
      // var index = arg0[i].indexof(arg1);
      // var index2 = arg0[i].indexof(arg2);
      if (arg0[i]===arg1){
        console.log('args[i] in torf',arguments[0][i],'arg1:',arg1);
        arr[0].splice(arg1,1);
      }
      if (arg0[i]===arg2){
        console.log('args[i] in torf',arguments[0][i],'arg2:',arg2);      
        arr[0].splice(arg2,1);
      }
    console.log('returned arr:',arr[0]);
      return arr[0];
    //}
  }
  
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);