var reverseArray = function(arr){
	var reversedArray = [];
	arr.sort();//not required as we are not expecting array to be in order
	for (var i = arr.length - 1; i >= 0; i--){
		reversedArray.push(arr[i]);
	}
	return reversedArray;
};

var testReverseArray = reverseArray(['a','b','c','d']);
console.log('reverse array should go from a,b,c,d to d,c,b,a',testReverseArray);