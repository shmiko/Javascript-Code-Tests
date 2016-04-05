// your code here
var loop = function(collection, callback){
    for (var i = 0; i < collection.length; i++){
      console.log(collection, 'collection inside loop');
      callback(collection[i], i);
    }
};

Array.prototype.filterBy = function(predicate){
	//console.log('predicate is ',predicate); //this returns numbers.filterBy arguments function
	//console.log('this is ',this);
	newNumberArray = [];
	loop(this, function(arr,ind){
		// console.log('array returned to inner function is :',arr);
	  	if (predicate(arr)) {
			// console.log('now checking if even or not: ',predicate(arr));
			newNumberArray.push(arr);//put true value into new array to be returned
			// console.log(newNumberArray);
		}		
	})
	if (newNumberArray.length){
		return newNumberArray; 
	}
	return false;
};

var numbers = [1, 2, 3, 4, 5];
var numbersPos = [0, 2, 4, 6, 8];
var notAllEvenNumbers = numbers.filterBy(function(number) { 
	// console.log('isEven result is ', number % 2 === 0)
    return number % 2 === 0;   
});
var allEvenNumbers = numbersPos.filterBy(function(number) { 
	// console.log('isEven result is ', number % 2 === 0)
    return number % 2 === 0;   
});
console.log(notAllEvenNumbers) // [2, 4];
console.log(allEvenNumbers) // [0, 2, 4, 6, 8];