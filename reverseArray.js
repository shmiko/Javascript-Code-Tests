var reverseArray = function(arr){
	var reversedArray = [];
	arr.sort();
	for (var i = arr.length - 1; i > -1; i--){
		reversedArray.push(arr[i]);
	}
	return reversedArray;
};

var testReverseArray = reverseArray(['a','b','c','d']);
console.log('reverse array should go from a,b,c,d to d,c,b,a',testReverseArray);