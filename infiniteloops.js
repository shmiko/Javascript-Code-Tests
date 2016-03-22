(function() {
  'use strict';



var loop2 = function(collection, callback){
    // ultimate side-effects function
    console.log(collection);
    for (var i = 0; i < collection.length; i++){
      callback(collection[i]);
      //console.log(collection[i]);
    }
};

var loop = function(collection, callback){

  if (collection.length){
    for (var i = 0; i < collection.length; i++){
      // console.log('collection[i] is ', collection[i]);
      callback(collection[i]);
    }
  } else if (typeof collection === 'object'){
    for (var key in collection){
      // console.log('collection[key] is ', collection[key]);
      callback(collection[key],key);
    }
  }
};



var countVowels = function(str){
  var numCount= 0;
  loop(str, function(value){
    switch (value){   
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        numCount=numCount+value.length;
        break;
      default:
    }
  }); 
  //console.log('numCount is ',numCount);
  return numCount;
  /*
  countVowels takes an string and returns the number of vowels in the string.

  use loop to complete countVowels

  var numberOfVowels = countVowels('hey whats up');

  console.log(numberOfVowels);
  */
};

var numberOfVowels = countVowels('hey whats up');
console.log('numberOfVowels is ',numberOfVowels);


var stringReversal = function(str){
  var newStrArray = [];
  var newStr = '';

  //trying this shortcut to looping, it works fine but we need to use the loop
  // newStr = str.split("").reverse().join("");
  // console.log('1st newStr is ',newStr);

  loop(str, function(value){
    newStrArray.push(value);
  });
  newStrArray.reverse();//.join();
  // return newStrArray;
  //using join doesn't seem to work for some unknown reason, despite it working above.
  //newStrArray.join();
  for (var i = 0; i < newStrArray.length;i++){
    newStr = newStr + newStrArray[i];
  }
  //console.log('newStr is ',newStr);
  return newStr;
  /*
  stringReversal takes a string and returns it in reverse.

  use loop to complete stringReversal.  


  var olleh = stringReversal('hello');
  console.log(olleh) // 'olleh';

  */
};

var olleh = stringReversal('hello');
console.log('olleh is ',olleh) // 'olleh';

var obj = {name: 'Albrey', favoriteColor: 'blue'};

loop(obj, function(value,key){
  console.log('value is ',value, " and key is ", key);
});


var isPalindrome = function(str){
  var newStrArray = [];
  var newStr = '';
  loop(str, function(value){
    newStrArray.push(value);
  });
  //console.log('new array is ',newStrArray)
  newStrArray.reverse();
  for (var i = 0; i < newStrArray.length;i++){
    newStr = newStr + newStrArray[i];
  }
  //console.log('newStr is ',newStr, ' and original str was ', str);
  if(newStr === str){
    return true;
  }
  return false;
  
  /*

  isPalindrome takes a string and returns whether it's a palindrome or not.

  A palindrome is a word that is spelled the exact same way forward than it is backward.

  use loop to solve isPalindrome.


  var truePalindrome = isPalindrome('hannah');
  var falsePalindrome = isPalindrome('hello');

  */
};
var truePalindrome = isPalindrome('hannah');
console.log(truePalindrome); //true
var falsePalindrome = isPalindrome('hello');
console.log(falsePalindrome); //false
var largestNumber = function(arr){
  /*
  largestNumber takes an array of number and returns the largest number in it.

  var nums = [1, 21, 471, 470, 39, 10, 92];
  var largestNum = largestNumber(nums);
  console.log(largestNum) // 471

  */
  var startNum;
  var currNum;
  var newStrArray = [];
  var spareArray = [];
  loop(arr, function(arr2){
     currNum = arr2;
      console.log('currNum is ', currNum);
      newStrArray.push(currNum);
      console.log('new array sorted is ', newStrArray);
  });
  newStrArray.sort(function(a,b){return a - b});;
  console.log('new array sorted is ', newStrArray);
  return newStrArray;
};

var nums = [1, 21, 471, 470, 39, 10, 92];
var largestNum = largestNumber(nums);
console.log(largestNum) // 471

var multBy = function(arr, num){
  var multiplyNum;
  var newStrArray = [];
  loop(arr, function(arr2){
    multiplyNum = arr2 * num;
    console.log('multiplyNum is ', multiplyNum);
    newStrArray.push(multiplyNum);
    console.log('new array sorted is ', newStrArray);
  });
  return newStrArray;
  /*
  multBy takes an array, and a number and multiplies each value in the array by the input number.

  use _.map to complete multBy.

  example:
  var nums = [1, 2, 3, 4, 5];
  var newArray = prep.multBy(nums, 3); 
  console.log(newArray) // [3, 6, 9, 12, 15];
  
  */
};
var nums = [1, 2, 3, 4, 5];
var newArray = multBy(nums, 3); 
console.log(newArray) // [3, 6, 9, 12, 15];

var squareBy = function(arr, num){
  /*
  squareBy takes an array, and a number and squares each value in the array by the input number.

  use _.map to complete squareBy.

  example:
  var nums = [1, 2, 3, 4, 5];
  var newArray = prep.squareBy(nums, 3); 
  console.log(newArray) // [1, 8, 27, 256, 3125];
  */
  var sqNum;
  var sqNum2;
  var newStrArray = [];
  loop(arr, function(arr2){
    var i = 1;
    sqNum = arr2;    
    while(i < num - 1){
      i = i + 1;
      sqNum = sqNum * sqNum;
      console.log('sqNum is ', sqNum, 'i is ', i );     
    }
    newStrArray.push(sqNum);
    console.log('new array sorted is ', sqNum);
  });
  return newStrArray;

};

var nums = [1, 2, 3, 4, 5];
var newArray = squareBy(nums, 3); 
console.log(newArray) // [1, 8, 27, 256, 3125];

var capitalizeFirstLetters = function(str){
  /*

  capitalizeFirstLetters takes a string and returns the same string with all of the first letters capitalized.

  use loop

  var string = 'hey how are you?';

  var newString = capitalizeFirstLetters(string)
  console.log(newString) // 'Hey How Are You?';

  */

};


// Expanding Loop to be used with objects:

/*

Our current `loop` function only works with `Arrays`, and `Objects` are feeling left out. They have their own
`for-in loop` that they'd like to stop using as well. Let's expand the purpose of our `loop` by adding 
in conditions that separate the functionality based on whether our input is an `object` or an `array`.

Remember the function we built during the week one self assessment? We can use it here as well:

```

var loop = function(collection, callback){

  if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++){
      callback(collection[i]);
    }
  } else if (typeof collection === 'object'){
    for (var key in collection){
      callback(collection[key]);
    }
  }
};


```

By just adding 4 lines of code, we can loop through `objects` as well! 

Solve the next 2 challenges using our new and improved loop function.

*/

var collectValues = function(obj){
  /*
    Takes an `object` as an argument and returns an `array` containing all of its values.
    
    ```

    Example: 
    
    var obj = {name: 'Albrey', favoriteMovie: 'Inception'};

    var listOfvalues = collectionValues(obj);

    console.log(listOfValues) // ['Albrey', 'Inception'];

    ```
  */
};


var containsValue = function(obj, targetValue){
  /*

    Takes two arguments, an `object` and a `targetValue` and returns a boolean as to whether the object 
    contains the targetValue.
  ```
    example:

    var obj = {name: 'Albrey', favoriteMovie: 'Inception'};

    var targetTest = containsValue(obj, 'Albrey');

    console.log(targetTest) // true

  ```

  */
};


/*

Expanding our callback:

Okay, so we know now that we can run our loop function on an `object` or an `array` which is awesome, but we're still selling ourselves short here.

You have probably noticed already -- the functions we have built are working with the ***values** of both objects
and arrays, but rarely (especially with objects), will that be the only data we care about.

For example, what if I wanted to collect data at *only* every even index. 



```

// With a for-loop, that woud look like this:

var evenIndexArray = function(arr){
  var results = [];
  // making sure our loop stops at the middle index in the array.
  for (var i = 0; i <= arr.length / 2; i++){
    // push each item
    result.push(arr[i]);
  };

  return results;
};

// Attempting to use `loop` it would look like this:

var evenIndexArray = function(arr){
  var results = [];
  // we don't have access to the index, so we create a count to substitue
  var count = 0;
  loop(arr, function(val){
    // if the count is equal to zero, it's considered even.
    if (count === 0){
      result.push(val);
      // add 1 to the count
      count++
    // if the count is divisible by 2, it's even.
    } else if (count % 2 === 0){
      result.push(val);
      // add 1 to the count
      count++
    }
  });

  return results;
};

```

As you can see, That's a lot of extra functionality to add in! Our current `loop` function loses its advantage over the `for loop` because it hasn't been given access to the `index` corresponding with each `value` inside of our array. With a little bit of magic we change that.

Inside of our `loop`, lets pass an additional argument to our `callback` function: an index.

```
var loop = function(collection, func){

  if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++){
      // passing the index as a second argument to our callback
      callback(collection[i], i);
    }
  } else if (typeof collection === 'object'){
    for (var key in collection){
      // passing the key as a second argument 
      callback(collection[key], key);
    }
  }
};

```

Passing in the index/key allows **any** callback that we pass into `loop` access to the index/key corresponding
to the current value that we're looping through! Pretty cool right?

How would that change how we build evenIndexArray?

```
var evenIndexArray = function(arr){
  var results = [];
  // no need for count since we have access to the indexes;
  loop(arr, function(value, index){
    // accessing the index that's being passed as the second argument to our callback
    if (index === 0){
      results.push(value)
    } else if (index % 2 === 0){
      results.push(value);
    }
  });

  return results
};

```

Cool! So we got rid of the count all together, which makes this a much more efficient function.

This also changes how we can interact with `objects`, rarely we're going to be worried about
**just** the values. In the next handful of exercises you will need to access the value
and the index/key in order to solve the prompts.

*/


var copyObj = function(obj){
  /*
    Uses loop to create a copy of the input object.
    
    example: 

    ```
    var obj = {name: 'Albrey', favoriteMovie: 'Inception'};

    var copyOfObj = copyObj(obj);

    console.log(copyOfObj) // {name: 'Albrey', favoriteMovie: 'Inception'};

    ```

  */
};

var extendObj = function(obj1, obj2){

  /*
    Takes two objects as arguments and uses loop to extend obj1 with the contents of obj2
    
    example: 

    ```
    var objOne = {name: 'Albrey', favoriteMovie: 'Inception'};
    var objTwo = {favoriteColor: 'Blue', hungry: true}

    extendObj(objOne, objTwo);

    console.log(objOne) // {name: 'Albrey', favoriteMovie: 'Inception', favoriteColor: 'Blue', hungry: true};

    ```

  */
};

var swapShuffle = function(arr){
  /*
  swapShuffle takes an array as an argument, mutates the array (it does not make a new one) and returns it with shuffled values.


  Examples:

  ```

    var numbers = [1, 2, 3, 4, 5];
    swapShuffle(numbers);
    console.log(numbers) //[3, 4, 2, 1, 5];

  ```
  */
  loop(arr, function(num, index){
    var randomIndex = Math.floor(Math.random() * arr.length);
    var copy = arr[index];
    arr[index] = arr[randomIndex];
    arr[randomIndex] = copy;
  });

  
};


//var sampleCarList = helpers.carFactory(helpers.carDatabase, helpers.carMaker, 100);
//console.dir(sampleCarList);

// CarFax.com Sprint:

//Find Blue Cars:

var findBlueCars = function(carList){
  // create an array, allBlueCars, to store your cars in.
  var allBlueCars = [];
  // use loop to loop through your carList array
  loop(carList, function(car){
    // each car is an object, so you'll want to loop through the objects as well
    loop(car, function(val, key){
      // check whether the property is 'color', and the value is 'blue'
      if (key === 'color' && val === 'blue'){
        // if so, push your corresponding car to the allBlueCars array.
        allBlueCars.push(car);
      }
    })
  });

  return allBlueCars;
};

// Find Cars By Color



// Find cars by year


// Find cars between 2 years


// Find cars by make


// Find cars by make and model



// EXTRA CREDIT:

// Find cars by using all categories.






}());


