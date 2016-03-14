(function() {
  'use strict';

  window.calculator = {};

  window.collections = {};


// Section 1: Let's build a calculator! I hate math so we're going to build
// functionality that does it for us. I've done the first one for you so that
// you can have a template for how you should be thinking about approaching each prompt.

// Let's warm up with some basic functionality: add, subtract, multiply, and divide.

calculator.add = function(num1, num2){
  // pseudocode:     INPUTS ^    ^
  //return num1 plus num2 to the user
  return num1 + num2;

};

// make your test case and test your answer as you go along
var addTestCase = calculator.add(1, 2); // OUTPUT = 3
// log your test case to the console and follow along in the browser as you
// build your algorithm.
console.log(addTestCase);


// 1. calculator.subtract
calculator.subtract = function(num1,num2){
	return num1 - num2;
};
var subtractTestCase = calculator.subtract(1, 2); 
console.log(subtractTestCase);

// 2. calculator.multiply
calculator.multiply = function(num1,num2){
	return num1 * num2;
};
var multiplyTestCase = calculator.multiply(1, 2); 
console.log(multiplyTestCase);

// 3. calculator.divide
calculator.divide = function(num1,num2){
	return num1 / num2;
}
var divideTestCase = calculator.divide(2, 1); 
console.log(divideTestCase);

// 4. caluclator.areaOfARectangle
calculator.areaOfARectangle = function(len,wid){
	return len * wid;
}
var areaTestCase = calculator.areaOfARectangle(2, 1); 
console.log(areaTestCase);

// 5. calculator.sumPlusProduct
calculator.sumPlusProduct = function(num1,num2){
	var result = num1 * num2;
	return num1 + num2 + result;
}
var SumPlusProductTestCase = calculator.sumPlusProduct(2, 1); 
console.log(SumPlusProductTestCase);

// 6. calculator.perimeterOfARectangle
calculator.perimeterOfARectangle = function(len,wid){
	return 2 * (len + wid);
}
var perimeterTestCase = calculator.perimeterOfARectangle(2, 1); 
console.log(perimeterTestCase);

// 7. calculator.areaOfACircle
calculator.areaOfACircle = function(rad){
	return Math.PI * (rad * rad);
}
var areaOfACircleTestCase = calculator.areaOfACircle(10); 
console.log(areaOfACircleTestCase);

// 8. calculator.slopeOfAline 
calculator.slopeOfALine = function(arr1,arr2){
	var x = (arr1[0] - arr1[1]);
	var y = (arr2[0] - arr2[1]);
	return y / x;
}
// var slopeOfALineCase = calculator.slopeOfALine([5, 10],[1,7]); 
// console.log(slopeOfALineCase);

// 9. create a function, calculator.pythagorean
calculator.pythagorean = function(pointa,pointb,pointc){
	var a = (pointa * pointa);
	var b = (pointb * pointb);
	if (a + b === (pointc * pointc)){
		return true;
	} else if (a + b !== (pointc * pointc)){
		return false;
	}
}
var pythagoreanPass = calculator.pythagorean(3, 4, 5); 
var pythagoreanFail = calculator.pythagorean(5, 9, 10);
console.log(pythagoreanPass);
console.log(pythagoreanFail);

//Section 2: Now that you have some practice building out a functions and approaching math algorithms, let's expand to some JS functionality that we'd use in the real world.



// 10. create a function, collections.first
collections.first = function(arr){
	return arr[0];
};
var passTest = collections.first([0,4,5]);
console.log(collections.first([0,4,5]));

// 11. create a function, collections.last
collections.last = function(arr){
	return arr[arr.length - 1];
};
var passTest = collections.last([0,4,5]);
console.log(collections.last([0,4,5]))

// 12. create a function, collections.pluckTargetFromObject
collections.pluckTargetFromObject = function(object,value){
	var nObject = object;
	  for ( var key in nObject){
		//console.log('value should be ',value,'and object key should be ', key);
	  	if ( key === value){
	  		return nObject[key];
	  	}
	  }
	  return 'target not found';
	// if (obj[key] === value) {
 //  		return value;
 //  	}  
	
};
var testObj = { name: 'paul', city: 'sydney'};
var pass = collections.pluckTargetFromObject(testObj, 'name');
var fail = collections.pluckTargetFromObject(testObj, 'favoriteFood');
//console.log(collections.pluckTargetFromObject(obj, 'name'));

// 13. collections.addPropertyAndValue
collections.addPropertyAndValue = function(obj,prop,value){
	var newObj = {};
	for (var key in obj){
		// console.log('1-',obj);
	    if (key == prop) { 
			// console.log('obj -  should be obj which is ',obj);
	  //   	console.log('prop -  should be key which is ',key);
	  //   	console.log('value should be obj[key] ',obj[key]);
	    	newObj[key] = value;
	      	// console.log('changing - value should now be ',obj[key]);
	    } else {
	    	// console.log('obj -  should be obj which is ',obj);
	    	// console.log('prop -  should be key which is ',key);
	    	// console.log('value should be obj[key] ',obj[key]);
	    	key = prop;
	    	newObj[key] = value;//[prop];
	    	
	    }
	    // console.log('last-',newObj);
	  } 
	  return newObj;
};
var sampleObj = {'rockStar': 'david bowie'};
var add = collections.addPropertyAndValue(sampleObj, 'movieStar', 'leonardo decaprio');
//var overWrite = collections.addPropertyAndValue(sampleObj, 'movieStar', 'denzel washington');
//var sObject = {'rockStar': 'Dieter Meier'};
//var answer = collections.addPropertyAndValue(sObject, 'rockStar', 'leonardo decaprio');
//console.log(answer);

// 15. create a function, collections.sumArray
collections.sumArray = function(arr){
	var sum = 0;
	var newSum = 0;
	for (var i = 0; i < arr.length; i++){
		sum = arr[i];
		newSum += sum;
	} 
	return newSum;
}
var numbers = [1,2,3];
var output = collections.sumArray(numbers);
console.log(output) // 6
//* TIP * : You'll need to figure out a way to save the added values into one
// summed variable. Think about javascript 'reassignment'


// ============ EXTRA CREDIT =====================


// 16. collections.allNumbersEven
collections.allNumbersEven = function(arr){
	var trues = 0;
	var falses = 0;
	for (var i = 0; i < arr.length; i++){
		if (arr[i] % 2 == 0) {
			trues++;
			//console.log('trues count is ',trues, 'for value ', arr[i]);
		} else {
			falses ++;
			//console.log('falses count is ',falses, 'for value ', arr[i]);
		}
	}
	if (falses === 0) {
		return true;
	} else {
		return false;
	}
}
var numbers = [1,11,13,23,15,16,17,9];
var numbers2 = [1,2,3,4,5,6,7,8];
var output = collections.allNumbersEven(numbers2);
console.log(output) // 6

// 17. collections.anyPrimes
function isPrimeNumber(num){   
	console.log('checking number ',num);  
      var d = num-1;
      while (d > 1){
        if ((num % d) == 0) return false;
        d--;
      }
      return true;       
      
    };

//console.log(isPrime(10));

collections.anyPrimes = function(arr) {
	for(var i = 0; i < arr.length; i++){
    	if (isPrimeNumber(arr[i])) {
    		console.log(isPrimeNumber(arr[i]));
    		return arr[i];
    	}
	}
	console.log('there are no prime numbers');
	return 'there are no prime numbers';
}
//console.log(isPrime(13));
// var passArr = [1, 2, 4, 6, 8, 13];
// var failArr = [1, 2, 4, 6, 8, 10];
// var passTest2 = collections.anyPrimes(13);
// var failTest2 = collections.anyPrimes(10);
// var test = collections.anyPrimes([3,5,7,75,79]);
// console.log('testing primes ',test);

// 18. collections.FizzBuzz
collections.FizzBuzz = function(num){
		//var i = num;
		var output = ""; //reset string to null every time
		if ( num % 3 == 0 && num % 5 != 0) {
			output += 'fizz';
		} else if (num % 5 == 0 && num % 3 != 0) {
			output += 'buzz';
		} else if (num % 5 == 0 && num % 3 == 0){
			output += 'fizzBuzz';
		} 

		console.log('output is ', output,' for num ', num);
		return output;
		
};
// var fizzNum = 9;
// var buzzNum = 10;
// var fizzBuzzNum = 15;
// var fizz = collections.FizzBuzz(fizzNum);
// var buzz = collections.FizzBuzz(buzzNum);
// var fizzBuzz = collections.FizzBuzz(fizzBuzzNum);

}());