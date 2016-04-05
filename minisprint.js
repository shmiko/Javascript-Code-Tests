// THIS MINI SPRINT IS MEANT TO HELP YOU PRACTICE USING UNDERSCORE FUNCTIONS:
console.log("looking?");


// var _ = {each: function() map:function()};


_.each = function(collection, callback){
  console.log('collection:',collection);
  if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++){
      //console.log('collection[i]:',collection[i]);
      callback(collection[i], i);
    }
  } else if (typeof collection === 'object'){
    for (var key in collection){
      callback(collection[key], key);
    }
  }
};

var nums = [1,2,3,4,5];

var doubleFunc = function(val){
	return val * 2;
}


var test = _.map(nums,doubleFunc);

console.log(test);

// toolbelt.distill = function(collection, callback, startValue){
//   toolbelt.loop(collection, function(elem){
//     startValue = callback(startValue, elem);
//   });

//   return startValue;
// };

function doubleAll(array) {
	// var emptyArray = [];
  // use _.map to double all of the numbers in an array
  // _.map(array,doubleFunt);
  console.log("inside doubleAll", _.map(array,doubleFunc));
  // var test2 = _.map(array,doubleFunc);
  return _.map(array,function(val){
	return val * 2;
  });
};

console.log("double",doubleAll(nums));


var distillPrimes2 = function(numbersArray){
    return toolbelt.distill(numbersArray, function(total,currNum){
        if (isPrime(currNum)){
            return total + currNum;
        }
        return total;
    },0)
};

function average(array,startValue) {
	// use _.reduce and _.size to find the average of all the number in an array
	var sizeResult =  _.size(array);
	console.log('size is:',sizeResult);
	console.log('array is:',array);
	var sum = 0;
	var total = _.reduce(array, function(el,startValue) {
		console.log(startValue)
		sum = startValue + el;
		return sum;
	},0)
	return sum/sizeResult;
};

console.log('ave:',average(nums,0));

function onlyEven(array) {
 // use _.filter to find all of the even numbers in a given array.
	var evens = _.filter(array, function(obj) {
		if(obj % 2 === 0){
	   	 return obj;
		}
	});
	return evens;
};
console.log('onlyEven',onlyEven(nums));

function repeat(times, VALUE) {
	// use _.map and _.range to return an array with the VALUE repeated however many times the 'times' parameter specifies.
	return _.map(_.range(times,VALUE),function(val){
			return val;
		});
};

console.log('repeat this:',repeat(5,"Yo"));
/*

Example:

repeat(4, "Major");

//=> ["Major", "Major", "Major", "Major"]

//  The implementation of repeat uses the _.map function to loop 

*/

function repeatedly(times, fun) {
	// expand your implementation of repeat to take an input function instead of hardcoding in the VALUE. Check the example below to get a better understanding.
};


/*

var randomArray = repeatedly(3, function(num){
	return Math.floor(Math.random() * num + 1);
});
console.log(randomArray);

// [1, 3, 8]
*/