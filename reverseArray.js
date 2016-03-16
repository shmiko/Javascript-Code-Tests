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


//write a function to reverse the same array which is passed in to the function
function reverseArrayArg(arr) {
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    var placeHolder = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = placeHolder;
  }
  return arr;
}

var testReverseArrayArgs = [1, 2, 3, 4, 5];
reverseArrayArg(testReverseArrayArgs);
console.log(reverseArrayArg);