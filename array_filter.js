function getStocksOver(stocks,minPrice){
	return stocks.filter(function(something){
		return something.price >= minPrice;
	})
};



var expensiveStocks = getStocksOver(
	[
		{symbol:"XFX",price:240.00,volume:23432},
		{symbol:"TNZ",price:332.00,volume:234},
		{symbol:"JXJ",price:120.00,volume:5323}
	],
	150.00);

//tests

console.log(JSON.stringify(expensiveStocks));


function destroyer(arr) {
  // Remove all the values
  var newArray = [];
  var arg1;
  var arg2;
  var nindex = 0;
  var arg0 = arguments[0];
  newArray = arg0;
  var len = newArray.length;
  var el;
  //console.log(len,' is length of newArray');
  for (var i = 0; i < len;i++){
    //if (arr[0].indexof(arr[1])){
      
    console.log('index in loop:',i);
    arg1 = arguments[1];
    arg2 = arguments[2];
    el = newArray[i];
    console.log('newArray in loop el is:',el,'arg1:',arg1,'arg2',arg2);
      var index = (el===arg1);
      var index2 = (el===arg2);
      if (index){
        console.log('index1----args[i] in torf',newArray[i],'arg1:',arg1,'index is true',index);
        newArray.splice(i,1);
        //delete newArray[i];
      }
      if (index2){
        console.log('index2-----args[i] in torf',newArray[i],'arg2:',arg2,'index is true',index);      
        newArray.splice(i,1);
        //delete newArray[i];
      }
    //console.log('newArray returned is:',newArray);
      
    //}
  }
  return 'newArray returned is:' + newArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
return str.replace(/(.)\1*/g, function(seq, p1){return seq.length.toString() + p1});
var num = "1";
for (var i = 10; i > 0; i--) {
    num = LookAndSay(num);
}

function lookAndSay(num) {
  var look = /(1+|2+|3+)/g;
  function say(match, position) {
    return match.length.toString() + match.substring(0, 1);
  }
  
  return num.toString().replace(look, say);
}


// Usage
var num = 1;
for (var i:int = 0; i < 20; i++) {
    num = lookAndSay(num);
    console.log(num);
}