(function() {
  'use strict';

/* Building a basic function library: Let's warm up with some basic functionality: sum, subtract, multiply, and divide. */

// 1. subtract function
  var subtract = function(num1, num2){
    return num1 - num2;
  };
  console.log(subtract(6, 3));

// 2. sum function
  var sum = function(num1, num2){
    return num1 + num2;
  };

// 3. multiply function
  var multiply = function(num1, num2){
    return num1 * num2;
  };

// 4. divide function
  var divide = function(num1, num2){
    return num1 / num2;
  };

/* Saving functions into variables: */

// 5. Reassign `meaningOfLife`
//set multiply function to equal variable
var meaningOfLife = multiply(21,2);
console.log(meaningOfLife);
// 6. **Reassign** `meaningOfLife`
//set sum function to equal variable
meaningOfLife = sum(40,2);
console.log(meaningOfLife);
// 7. **Reassign `meaningOfLife`
//set subtract function to equal variable
meaningOfLife = subtract(44,2);
console.log(meaningOfLife);
// 8. **Reassign** `halfLife`
//set divide function to equal variable
var halfLife = divide(meaningOfLife,2);
console.log(halfLife);

// BUILDING FUNCTIONS WITH FUNCTIONS:

// 9. `areaOfARectangle`
var areaOfARectangle = function(length, width){
    // calculate the length and the width using `multiply` and save it 
    // into the 'area' variable.
    var area = multiply(length, width);

    // return the area variable
    return area;
};
var testArea = areaOfARectangle(4,5);
console.log(testArea); //should be 20


// 10. `sumPlusProduct`,
    //set sum function and multiply function to equal variable, used within return statement
    // Which two of the four functions will you need to solve this prompt?
    var sumPlusProduct = function(num1,num2){
      return sum(num1,num2) + multiply(num1,num2);
    };
    //test function
    var sumPlusProdResult = sumPlusProduct(15,10);
    console.log(sumPlusProdResult); //175 which is 150 + 25


// 11. `perimeterOfARectangle` 
    
    // Which two of the four functions will you need to solve this prompt?
    //set 2 lots of multiply function to equal variable, used within return statement
    var perimeterOfARectangle = function(len,wid){
      var start = multiply(len,wid);
      return multiply(start,2);
    };
    var perimeterOfARectangleResult = perimeterOfARectangle(15,10);
    console.log(perimeterOfARectangleResult); //should be 300


// 12. `areaOfACircle`

// **HINT** JavaScript has a function that can help you do just this.
// Which of the four functions will you need to solve this prompt?

//using Math function
var areaOfACircle = function(rad){
  return Math.PI * multiply(rad,rad);
};
var areaOfACircleTestCase = areaOfACircle(10); 
console.log(areaOfACircleTestCase); //should be 314.1592653589793

// 13. `slopeOfAline` 
//use previous subtract functions to determin the result and return answer using divide
// Which of the four functions will you need to solve this prompt?
var slopeOfALine = function(arr1,arr2){
  var x = subtract(arr1[1],arr1[0]);
  var y = subtract(arr2[1],arr2[0]);
  return divide(y,x);
};
//test
var slopeOfALineCase = slopeOfALine([4,6],[5,3]); 
console.log(slopeOfALineCase); //should be -1

// 14. `pythagorean` 
// Which of the four functions will you need to solve this prompt?
//use multiple function for initial calcs then use sum and multiply results to compare
var trueOrFalse;
var pythagorean = function(sideOne, sideTwo, sideThree){
  //console.log(sideOne, sideTwo, sideThree, 'is sideOne, sideTwo, sideThree')
  var array = Array.prototype.slice.call(arguments);
  array = array.sort();
  var a = multiply(array[0],array[0]);
  var b = multiply(array[1],array[1]);
  
  if (sum(a,b) === multiply(array[2],array[2])){
    trueOrFalse = true;
    //console.log(trueOrFalse);
    //return trueOrFalse;
  } else if (sum(a,b) !== multiply(array[2],array[2])){
    trueOrFalse = false;
    //console.log(trueOrFalse);
    //return trueOrFalse;
  }
  return trueOrFalse;
  
};
//test pos and neg results
var testPythagoreanPass = pythagorean(3, 4, 5); 
var testPythagoreanFail = pythagorean(5, 9, 10);
console.log(testPythagoreanPass); //should pass
console.log(testPythagoreanFail); //should fail

// 15. `modulo`
//use modulus
var modulo = function(dividend,divisor){
  return dividend % divisor;
};
//test
var testModulo = modulo(7,5);
console.log(testModulo);

// 16. Fizz Buzz:
var FizzBuzz = function(num){
    //var i = num;
    //use modulo function within this function and text concat 
    var output = ""; //reset string to null every time
    if ( modulo(num,3) == 0 && modulo(num,5) != 0) {
      output += 'fizz';
    } else if (modulo(num,5) == 0 && modulo(num,3) != 0) {
      output += 'buzz';
    } else if (modulo(num,5) == 0 && modulo(num,3) == 0){
      output += 'fizzBuzz';
    } 

    // console.log('output is ', output,' for num ', num);
    return output;
    
};
//testing passing one test for each possibility
var testFizzNum = 9;
var testBuzzNum = 10;
var testFizzBuzzNum = 15;
var fizz = FizzBuzz(testFizzNum);
var buzz = FizzBuzz(testBuzzNum);
var fizzBuzz = FizzBuzz(testFizzBuzzNum);
console.log(fizz);
console.log(buzz);
console.log(fizzBuzz);

// Tip Calculator Module: 
var tipCalculator = function(cost, service){
    
    if (service === "okay"){
      var finalTotal =  sum(multiply(divide(15,100), cost),cost);
      // return the finalTotal
      return finalTotal;
    } else if (service === "good!") {
        finalTotal = sum(multiply(divide(18,100), cost),cost);
      return finalTotal;
    } else if (service === "poor :("){
        finalTotal = sum(multiply(divide(12,100),cost),cost);
        return finalTotal;
    } else if (service === "fantastic!"){
        finalTotal = sum(multiply(divide(22,100),cost),cost);
        return finalTotal;
    }
};
var tipGoodTest = tipCalculator(10,"good!");
console.log(tipGoodTest);
var tipOkayTest = tipCalculator(10,"okay");
console.log(tipOkayTest);
var tipPoorTest = tipCalculator(10,"poor :(");
console.log(tipPoorTest);
var tipFantasticTest = tipCalculator(10,"fantastic!");
console.log(tipFantasticTest);
      
// 21. `celsiusToFahrenheit`: (tempurature * 9/5) + 32
// var slopeOfALine = function(arr1,arr2){
// var x = subtract(arr1[1],arr1[0]);
// var y = subtract(arr2[1],arr2[0]);
//   return divide(y,x);
// };
// How can you assemble your `sum`, `multiply`, and `divide` functions to solve the prompt?
var celsiusToFahrenheit = function(temp){
  //use all 3 functions in one line
  return sum(multiply(temp,divide(9,5)),32);
  //return slopeOfALine([5,temp],[9,32]);
}
var testCelsiusToFahrenheit = celsiusToFahrenheit(15);
console.log('cel to far is ',testCelsiusToFahrenheit); //answr should be 59, it is

// 22. `fahrenheightToCelcius`(tempurature - 32) * 5/9

// How can you assemble your `subtract`, `multiply`, and `divide` functions to solve the prompt?
var fahrenheightToCelcius = function(temp){
  //use all 3 functions in one line
  return multiply(subtract(temp,32),divide(5,9));
}
var testFahrenheightToCelcius = fahrenheightToCelcius(59);
console.log(testFahrenheightToCelcius); //answer should be 15, it is

// 23. Refactor your earlier functions to be built in a functional pattern if they haven't already.
  // `perimeterOfARectangle`
  // `areaOfACircle`
  // `pythagorean`

// DO NOT TOUCH THIS CODE.
var receiptMaker = function(num){
  var receipts = [];
  var serviceRating = ['good!', 'okay', 'fantastic!', 'poor :(']
  for (var i = 0; i < num; i++){
    var dinnerReceipt = {};
    var rating = serviceRating[Math.floor(Math.random() * serviceRating.length)];
    var cost = Math.floor(Math.random() * 10 + 25);
    dinnerReceipt.cost = cost;
    dinnerReceipt.serviceRating = rating;
    receipts.push(dinnerReceipt);
  };

  return receipts;
};

// DO NOT TOUCH, use this to test your `calculateFinalTotal` function.
var receiptsArray = receiptMaker(5);
console.log('receiptsArray is ',receiptsArray);



// 24. calculateFinalTotal
var calculateFinalTotal = function(arr){
    var subtotal = 0;
    var finalTotalsArray = [];
    for (var i  = 0; i < arr.length; i++){
      // console.log(arr[i].cost, arr[i].serviceRating);
      // if (arr[i].serviceRating === "okay"){
      //   subtotal =  sum(multiply(divide(15,100), arr[i].cost),arr[i].cost);
      //   console.log(subtotal);
      // } else if (arr[i].serviceRating === "good!") {
      //   subtotal += sum(multiply(divide(18,100), arr[i].cost),arr[i].cost);
      //   console.log('good is ',subtotal);
      // } else if (arr[i].serviceRating === "poor :("){
      //   subtotal +=  sum(multiply(divide(12,100), arr[i].cost),arr[i].cost);
      //   console.log('poor is ',subtotal);
      // } else if (arr[i].serviceRating === "fantastic"){
      //   subtotal +=  sum(multiply(divide(22,100), arr[i].cost),arr[i].cost);
      //   console.log(subtotal);
      // }
        console.log(subtotal);
        //finalTotalsArray.push
      //refactoring
        var cost = arr[i].cost;
        var serviceRating = arr[i].serviceRating;
        var finalTotal = tipCalculator(cost,serviceRating);
        //push to array and return array
        var newFinalCalcObj = {};
        newFinalCalcObj.cost = cost;
        newFinalCalcObj.serviceRating = serviceRating;
        newFinalCalcObj.finalTotal = finalTotal;
        finalTotalsArray.push(newFinalCalcObj);
    }
    return finalTotalsArray;
};

var testCalcFinal1 = calculateFinalTotal([ { cost: 29, serviceRating: 'good!' }, //18% = 34.22
  { cost: 25, serviceRating: 'good!' },  //18% = 29.5
  { cost: 28, serviceRating: 'poor :(' }, //12% = 31.36
  { cost: 28, serviceRating: 'poor :(' }, //12% = 31.36
  { cost: 32, serviceRating: 'poor :(' } ]); //12% = 35.84
var testCalcFinal = calculateFinalTotal(receiptsArray); //12% = 35.84  
console.log('testCalcFinal is ',testCalcFinal); //34.22 + 29.5 + 31.36 + 31.36 + 35.84 = 162.28 correct





function updateFriendsCollectionCheck (friendListArr, friendArg) {
    var bExists = false;
    if (friendListArr.indexOf(friendArg) === -1) {
        //friendListArr.push(friendArg);
        console.log('New friendListArr collection is : ' + friendListArr);
        bExists = false;
    } else if (friendListArr.indexOf(friendArg) > -1) {
        bExists = true;
        console.log(friendArg + ' already exists in the friendListArr collection.');
    }
    return bExists;
};

var friendsList = ['Wendy','Jack','Lilia','Paul','Glen','Ross','John','Lucy'];
var generatedFriend;
function generateFriend(arr){
  //generatedFriend = arr[Math.floor(Math.random() * arr.length)];
  generatedFriend = arr[arr.length - 1];
  //friendsList.splice(generatedFriend, 1);
  friendsList.pop();
  //console.log('inside generateFriend func - friendsList array is now', friendsList, ' because we removed this freind', generatedFriend);
  return generatedFriend;
};

// DO NOT TOUCH use these to pass to test your `costSplitter function.
var friends = ['Albrey', 'Bianca', 'Preston', 'Mo'];
var costOfMeal = 148.34


// 25. costSplitter
var friendSubTotal = 0;
var calculateFinalTip = function(arr){
    friendSubTotal = 0;
    //this function has taken 1 array from initial object, use specific properties to generate tip as friend subtotal
    if (arr.rating === "okay"){
      friendSubTotal =  sum(multiply(divide(15,100), arr.cost),arr.cost);
    } else if (arr.rating === "good!") {
      friendSubTotal += sum(multiply(divide(18,100), arr.cost),arr.cost);
    } else if (arr.rating === "poor :("){
      friendSubTotal +=  sum(multiply(divide(12,100), arr.cost),arr.cost);
    } else if (arr.rating === "fantastic!"){
      friendSubTotal +=  sum(multiply(divide(22,100), arr.cost),arr.cost);
    }
    //console.log('friend and tip is ',arr.friend + "," + friendSubTotal);
    return arr.friend + "," + friendSubTotal;
};
//This will create the friends array for the costSplitter function, 
//the array will have friends name and the cost of the meal as well as the service to know what tip to calculate.
var friendsCostMaker = function(num){
  //declare empty array
  var friendsCosts = [];
  //declare list of services
  var serviceRating = ['good!', 'okay', 'fantastic!', 'poor :(']
  //build up list of generated friends so as not to duplicate entries
  //as we splice and remove form initial array we will build up new array of unique friends
  var listOfFriends = [];
  for (var i = 0; i < num; i++){     
	 //push num new friends into new array using specific function to splice and return data
	 listOfFriends.push(generateFriend(friendsList));
  }
  //empty array to push ito final object
  friendsCosts = [];
  for (var k = 0; k < listOfFriends.length; k++){
    //final object
    var friendAndCost = {};
    //var to capture index
		var changeFriendList = listOfFriends[k];
		//get cost
    var cost = Math.floor(Math.random() * 5 + 20);
    //get rating
    var rating = serviceRating[Math.floor(Math.random() * serviceRating.length)];
    //assign each object property a value from random generators
    friendAndCost.cost = cost;
    friendAndCost.friend = changeFriendList;
    friendAndCost.rating = rating;
    //push object data to array
    friendsCosts.push(friendAndCost);
  }
  return friendsCosts;
};
//run this to generate unique data for the final sprint - we need to pass in an array
//this function will generate that array with, friend,cost and service type
var generateFriendsCosts = friendsCostMaker(5);
console.log('generateFriendsCosts is ',generateFriendsCosts);

var costSplitter = function(arrFriends){
  var costSplitFriendsArray = [];
  //loop through unique array of friends and their dinner costs without tips
  for (var i  = 0; i < arrFriends.length; i++){
    //create new object for final result
    var costSplitFriendsObj = {};
    //console.log('arrFriends[i] is ',arrFriends[i]);
    //call calculateFinalTip passing in ist array based on loop index
    calculateFinalTip(arrFriends[i]);
    //assign values returned from function to each object property
    costSplitFriendsObj.name = arrFriends[i].friend;
    costSplitFriendsObj.cost = friendSubTotal
    //push properties and values into array
    costSplitFriendsArray.push(costSplitFriendsObj);
  }  
  return costSplitFriendsArray;
};
//test
var testCostSplitter = costSplitter([ { cost: 23, friend: 'Lucy', rating: 'good!' },
  { cost: 24, friend: 'John', rating: 'good!' },
  { cost: 20, friend: 'Ross', rating: 'good!' },
  { cost: 20, friend: 'Glen', rating: 'poor :(' },
  { cost: 23, friend: 'Paul', rating: 'fantastic!' } ]); 
console.log('Split total cost by friends are ',testCostSplitter); 
//result is Split total cost by friends are  [ { name: 'Lucy', cost: 27.14 },
//  { name: 'John', cost: 28.32 },
//  { name: 'Ross', cost: 23.6 },
//  { name: 'Glen', cost: 22.4 },
//  { name: 'Paul', cost: 28.06 } ]

//another test
// 26. advancedPythagoreanCheck

var advancedPythagoreanCheck = function(int1,int2,int3){
  //I refactored the original PythagoreanCheck to be more flexible
  //using global var ok
  //works
  pythagorean(int1,int2,int3);
  console.log(trueOrFalse);
  return trueOrFalse;
};

//tests
var truthy = advancedPythagoreanCheck(3, 4, 5);
console.log(truthy);
var alsoTruthy = advancedPythagoreanCheck(5, 3, 4);
console.log(alsoTruthy);
var falsy = advancedPythagoreanCheck(3, 4, 6);
console.log(falsy);

}());
