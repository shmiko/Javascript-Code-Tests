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
    console.log(perimeterOfARectangleResult); //175 which is 150 + 25


// 12. `areaOfACircle`

// **HINT** JavaScript has a function that can help you do just this.
// Which of the four functions will you need to solve this prompt?

//using Math function
var areaOfACircle = function(rad){
  return Math.PI * multiply(rad,rad);
};
var areaOfACircleTestCase = areaOfACircle(10); 
console.log(areaOfACircleTestCase);

// 13. `slopeOfAline` 
//use previous subtract functions to determin the result and return answer using divide
// Which of the four functions will you need to solve this prompt?
var slopeOfALine = function(arr1,arr2){
  var x = subtract(arr1[0],arr1[1]);
  var y = subtract(arr2[0],arr2[1]);
  return divide(y,x);
};
//test
var slopeOfALineCase = slopeOfALine([5, 10],[1,7]); 
console.log(slopeOfALineCase);

// 14. `pythagorean` 
// Which of the four functions will you need to solve this prompt?
//use multiple function for initial calcs then use sum and multiply results to compare
var pythagorean = function(sideOne, sideTwo, sideThree){
  var a = multiply(sideOne,sideOne);
  var b = multiply(sideTwo,sideTwo);
  if (sum(a,b) === multiply(sideThree,sideThree)){
    return true;
  } else if (sum(a,b) !== multiply(sideThree,sideThree)){
    return false;
  }
};
//test pos and neg results
var testPythagoreanPass = pythagorean(3, 4, 5); 
var testPythagoreanFail = pythagorean(5, 9, 10);
console.log(testPythagoreanPass);
console.log(testPythagoreanFail);

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
    } else if (service === "poor"){
        finalTotal = sum(multiply(divide(12,100),cost),cost);
        return finalTotal;
    } else if (service === "fantastic"){
        finalTotal = sum(multiply(divide(22,100),cost),cost);
        return finalTotal;
    }
};
var tipGoodTest = tipCalculator(10,"good!");
console.log(tipGoodTest);
var tipOkayTest = tipCalculator(10,"okay");
console.log(tipOkayTest);
var tipPoorTest = tipCalculator(10,"poor");
console.log(tipPoorTest);
var tipFantasticTest = tipCalculator(10,"fantastic");
console.log(tipFantasticTest);
      
// 21. `celsiusToFahrenheit`: (tempurature * 9/5) + 32

// How can you assemble your `sum`, `multiply`, and `divide` functions to solve the prompt?
var celsiusToFahrenheit = function(temp){
  //use all 3 functions in one line
  return sum(multiply(temp,divide(9,5)),32);
}
var testCelsiusToFahrenheit = celsiusToFahrenheit(15);
console.log(testCelsiusToFahrenheit);

// 22. `fahrenheightToCelcius`(tempurature - 32) * 5/9

// How can you assemble your `subtract`, `multiply`, and `divide` functions to solve the prompt?
var fahrenheightToCelcius = function(temp){
  //use all 3 functions in one line
  return multiply(subtract(temp,32),divide(5,9));
}
var testFahrenheightToCelcius = fahrenheightToCelcius(59);
console.log(testFahrenheightToCelcius);

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
    for (var i  = 0; i < arr.length; i++){
      console.log(arr[i].cost, arr[i].serviceRating);
      if (arr[i].serviceRating === "okay"){
        subtotal =  sum(multiply(divide(15,100), arr[i].cost),arr[i].cost);
        console.log(subtotal);
      } else if (arr[i].serviceRating === "good!") {
        subtotal += sum(multiply(divide(18,100), arr[i].cost),arr[i].cost);
        console.log('good is ',subtotal);
      } else if (arr[i].serviceRating === "poor :("){
        subtotal +=  sum(multiply(divide(12,100), arr[i].cost),arr[i].cost);
        console.log('poor is ',subtotal);
      } else if (arr[i].serviceRating === "fantastic"){
        subtotal +=  sum(multiply(divide(22,100), arr[i].cost),arr[i].cost);
        console.log(subtotal);
      }
        console.log(subtotal);
      
    }
    return subtotal;
};

var testCalcFinal = calculateFinalTotal([ { cost: 29, serviceRating: 'good!' }, //18% = 34.22
  { cost: 25, serviceRating: 'good!' },  //18% = 29.5
  { cost: 28, serviceRating: 'poor :(' }, //12% = 31.36
  { cost: 28, serviceRating: 'poor :(' }, //12% = 31.36
  { cost: 32, serviceRating: 'poor :(' } ]); //12% = 35.84
console.log(testCalcFinal); //34.22 + 29.5 + 31.36 + 31.36 + 35.84 = 162.28 correct

// DO NOT TOUCH use these to pass to test your `costSplitter function.
var friends = ['Albrey', 'Bianca', 'Preston', 'Mo'];
var costOfMeal = 148.34
// 25. costSplitter
//This will create the friends array for the costSplitter function, 
//the array will have friends name and the cost of the meal as well as the service to know what tip to calculate.
var friendsCostMaker = function(num){
  //declare empty array
  var friendsCosts = [];
  //declare list of potential friends
  var friendsList = ['Wendy','Jack','Lilia','Paul','Glen','Ross','John','Lucy'];
  var sorted_arr = friendsList.slice().sort();
  //declare list of services
  var serviceRating = ['good!', 'okay', 'fantastic!', 'poor :(']
  //build up list of generated friends so as not to duplicate entries
  var listOfFriends = [];
  var newFriendsList = [];
  var sorted_arr2 = newFriendsList.slice().sort();
  var arrIsEmpty = false;
  for (var i = 0; i < num; i++){
    //declare empty object exist within array
    var friendAndCost = {};
    //generate random service from list
    var rating = serviceRating[Math.floor(Math.random() * serviceRating.length)];
    //generate random friends from list
    //use friendsList the first time only, check if newFriendsList is empty
      var friend = sorted_arr[Math.floor(Math.random() * sorted_arr.length)];
      console.log('newFriendsList.length is zero',newFriendsList.length, 'friend is ',friend)
      
      //friend = newFriendsList[Math.floor(Math.random() * newFriendsList.length)];
      //console.log('newFriendsList.length is not zero  - now gen friend form new list',newFriendsList.length, 'friend is ',friend )

    //push friend to listOfFriends array then we can use this to check if generated name pre exists
    listOfFriends.push(friend);
    
    //now create new list of available friends without the one generated
    for (var j = 0; j < listOfFriends.length; j++){
      console.log('j listOfFriends friend is ',listOfFriends[j]);
      var changeFriendList = listOfFriends[j];
      //if (friendsList[j] === friend){
      //if(newFriendsList.indexOf(friend) !== 0){
        //now check that the new array doesn't already have the old freind
        if (newFriendsList.length != 0 && newFriendsList.length < 6){
          console.log('newFriendsList.length is ',newFriendsList.length)
          //for (var k = 0; k < newFriendsList.length; k++){
            //console.log('newFriendsList k friend is ',newFriendsList);
            if(newFriendsList.indexOf(friend) !== 0){
            //if (newFriendsList[j] !== friend){
              newFriendsList.push(changeFriendList);
            }
          //}
        } else {
          newFriendsList.push(changeFriendList);
        }
      //}
    };
    console.log('orig friendsList is ',friendsList)
    console.log('new FriendsList is ',newFriendsList)
    //generate random cost
    var cost = Math.floor(Math.random() * 5 + 20);
    //assign each object property a value from random generators
    friendAndCost.cost = cost;
    friendAndCost.friend = friend;
    friendAndCost.rating = rating;
    //push object data to array
    friendsCosts.push(friendAndCost);
  }
  //console.log('friendsCosts is ',friendsCosts);
  return friendsCosts;
};

var generateFriendsCosts = friendsCostMaker(5);
console.log('generateFriendsCosts is ',generateFriendsCosts);


var costSplitter = function(arr){

};
}());
