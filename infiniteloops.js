(function() {
  'use strict';



var loop2 = function(collection, callback){
    // ultimate side-effects function
    //console.log(collection);
    for (var i = 0; i < collection.length; i++){
      callback(collection[i]);
      //console.log(collection[i]);
    }
};

var loop = function(collection, callback){

  if (collection.length){
    for (var i = 0; i < collection.length; i++){
      //console.log('collection[i] is ', collection[i]);
      callback(collection[i],i);
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
    newStrArray.unshift(value);
    // newStrArray.push(value);
  });
  // newStrArray.reverse();//.join();

  //unshift works too
  // return newStrArray;
  //using join doesn't seem to work for some unknown reason, despite it working above.
  return newStrArray.join('');
  // for (var i = 0; i < newStrArray.length;i++){
  //   newStr = newStr + newStrArray[i];
  // }
  //console.log('newStr is ',newStr);
  // return newStr;
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
  return stringReversal(str) === str;
};

  // var newStrArray = [];
  // var newStr = '';
  // loop(str, function(value){
  //   newStrArray.push(value);
  // });
  //console.log('new array is ',newStrArray)
  // newStrArray.reverse();
  // for (var i = 0; i < newStrArray.length;i++){
  //   newStr = newStr + newStrArray[i];
  // }
  //console.log('newStr is ',newStr, ' and original str was ', str);
  // if(newStr === str){
  //   return true;
  // }
  // return false;
  
  /*

  isPalindrome takes a string and returns whether it's a palindrome or not.

  A palindrome is a word that is spelled the exact same way forward than it is backward.

  use loop to solve isPalindrome.


  var truePalindrome = isPalindrome('hannah');
  var falsePalindrome = isPalindrome('hello');

  */

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
  var currNum = 0;
  var newStrArray = [];
  var spareArray = [];
  loop(arr, function(arr2){
    if(currNum < arr2){
      currNum = arr2;
    }


     //currNum = arr2;
      //console.log('currNum is ', currNum);
      //newStrArray.push(currNum);
      //console.log('new array sorted is ', newStrArray);
  });
  //newStrArray.sort(function(a,b){return a - b});;
  //console.log('new array sorted is ', newStrArray);
  return currNum;
};

var nums = [1, 21, 471, 470, 39, 10, 92];
var largestNum = largestNumber(nums);
console.log(largestNum) // 471

var multBy = function(arr, num){
  var multiplyNum;
  var newStrArray = [];
  loop(arr, function(arr2){
    //multiplyNum = arr2 * num;
    //console.log('multiplyNum is ', multiplyNum);
    //newStrArray.push(multiplyNum);
    newStrArray.push(arr2 * num);
    //console.log('new array sorted is ', newStrArray);

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
    newStrArray.push(Math.pow(arr2,num));
    // var i = 1;
    // sqNum = arr2;    
    // while(i < num - 1){
    //   i = i + 1;
    //   sqNum = sqNum * sqNum;
      //console.log('sqNum is ', sqNum, 'i is ', i );     
    // }
    // newStrArray.push(sqNum);
    //console.log('new array sorted is ', sqNum);


  });
  return newStrArray;

};

var nums = [1, 2, 3, 4, 5];
var newArray = squareBy(nums, 3); 
console.log('new sq array is ',newArray) // [1, 8, 27, 256, 3125];

var capitalizeFirstLetters = function(str){
  /*

  capitalizeFirstLetters takes a string and returns the same string with all of the first letters capitalized.

  use loop

  var string = 'hey how are you?';

  var newString = capitalizeFirstLetters(string)
  console.log(newString) // 'Hey How Are You?';

  */

  var newArrayFromStr = str.split(" ");
  //console.log('newArrayFromStr is ',newArrayFromStr);
  var newStr;
  var newChar;
  var newerStr;
  //var array = str.split(/(\s+)/);
  var array = [];
  var nCount = 0;
  loop(newArrayFromStr,function(retstr){
    //console.log('retstr len is ',retstr.length);
      loop(retstr,function(value,iVar){
        //console.log('inner loop value is ',value, ' access to i var ', iVar);
        if(iVar == 0){
          //console.log('inner loop value[0] is ',value[0]);
          newChar = value[0].trim();
          array.push(newChar.toUpperCase());
          //console.log('after inner loop value is ',value.toUpperCase());
        }else if (iVar > 0 || iVar <= value.length){
          //console.log('NOT inner loop value[0] is ',value[0]);
          newChar = value.trim();
          array.push(newChar);
          //console.log('NOT inner loop value is ',value[0]);
        } 
      })
    array.push(" "); 
  })
  //console.log('array result is ',array.join(" "));
  return array.join("");
};
//Needed to use an array of words and pass back the index to the callback.

//DONE

var string = 'hey how are you?';

var newString = capitalizeFirstLetters(string)
console.log('starting string is ',string,' and new CamelCase String is ',newString); // 'Hey How Are You?';

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

var collectionValues = function(obj){
  /*
    Takes an `object` as an argument and returns an `array` containing all of its values.
    
    ```

    Example: 
    
    var obj = {name: 'Albrey', favoriteMovie: 'Inception'};

    var listOfvalues = collectionValues(obj);

    console.log(listOfValues) // ['Albrey', 'Inception'];

    ```
  */
  var newArr = [];
  loop(obj,function(value,key){
    //console.log('value is ',value, " and key is ", key);
    newArr.push(value);
  })
  return newArr;
};
var obj = {name: 'Albrey', favoriteMovie: 'Inception'};
var listOfValues = collectionValues(obj);
console.log(listOfValues); // ['Albrey', 'Inception'];

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
  var boolTest;
  loop(obj, function(value,key){
    //console.log('targetValue is ',targetValue,'value is ',value, 'key is ',key);
    if(value == targetValue){
      console.log('true');
      boolTest = true;
    } else {
      console.log('false');
      boolTest = false;
    }
  })
  return boolTest;
};
var obj = {name: 'Albrey', favoriteMovie: 'Inception'};

var targetTest = containsValue(obj, 'Albrey');

console.log('targetTest is ',targetTest); // true

//because the 2nd object value doesn't match it will return a false which overrides the first.

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
var jon = {
    name: "Jon Tippens",
    greatestFear: "Those frozen biscuit things.",
    dateUsedAgainstHim: "2/02/1997",
}; 
var albrey = {
    name: "Albrey Brown",
    greatestFear: "Brain aneurysm.",
    dateUsedAgainstHim: "03/30/1991",
};

var people = [jon, albrey];

for (var i = 0; i < people.length; i++){
    var person = people[i];
    for(var characteristic in person){
        console.log(person[characteristic]);
    }
}

loop(people, function(person){;
    console.log('person is ',person);
    loop(person, function(characteristic){
        console.log('char is ',characteristic);
    });
});

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
  var newObj = {};
  var newKey;
  loop(obj,function(value,key){
    //console.log('value,key is ',value,key);
    newKey = key;
    newObj[newKey] = value;
  })
  //console.log(newObj);
  return newObj;
};
var obj = {name: 'Albrey', favoriteMovie: 'Inception'};

    var copyOfObj = copyObj(obj);

    console.log(copyOfObj) // {name: 'Albrey', favoriteMovie: 'Inception'};


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

  var newObj = {};
  var newKey;
  loop(obj1,function(value,key){
    //console.log('value,key is ',value,key);
    newKey = key;
    newObj[newKey] = value;
    loop(obj2,function(value,key){
      newKey = key;
      newObj[newKey] = value;
    })
  })
  //console.log(newObj);
  return newObj;
};
var objOne = {name: 'Albrey', favoriteMovie: 'Inception'};
var objTwo = {favoriteColor: 'Blue', hungry: true}
extendObj(objOne, objTwo);
console.log(extendObj) // {name: 'Albrey', favoriteMovie: 'Inception', favoriteColor: 'Blue', hungry: true};


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

var numbers = [1, 2, 3, 4, 5];
swapShuffle(numbers);
console.log('numbers are ',numbers) //[3, 4, 2, 1, 5];


// var carMaker = function(year, make, model, color, price){
//   return {
//     yeah: year,
//     make: make,
//     model: model,
//     color: color,
//     price: price
//   }
// };


// var carDatabase = { 
//   years: [1991, 1992, 1993, 1994,1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
//   makes: ['Toyota', 'Ford', 'BMW', 'Nissan'],
//   makeAndModel: {
//     Toyota: {
//       models: ['Camry', 'Corolla', 'Prius', 'Rav4']
//     }, 
//     Ford: {
//       models: ['Fiesta', 'Focus', 'Everest', 'Mustang']
//     },
    
//     BMW: {
//       models: ['M3', '3 Series', '4 Series', '6 Series']
//     },
//     Nissan: {
//       models: ['Altima', 'Pathfinder', 'Leaf', 'Juke']
//     }
//   },
//   colors: ['blue', 'red', 'black', 'white', 'silver', 'champagne'],
//   prices: [20000,120,6500,8700,32000,43000,27560,200,78000]
// };


// var carFactory = function(carDatabase, carMaker, numberOfCars){
//   var cars = [];
//   for (var i = 0; i <= numberOfCars; i++){
//     var randomYear = carDatabase.years[Math.floor(Math.random() * carDatabase.years.length)]
//     var randomColor = carDatabase.colors[Math.floor(Math.random() * carDatabase.colors.length)];
//     var randomMake = carDatabase.makes[Math.floor(Math.random() * carDatabase.makes.length)];
//     var randomPrice = carDatabase.prices[Math.floor(Math.random() * carDatabase.prices.length)];
//     var randomModel = carDatabase.makeAndModel[randomMake] ? carDatabase.makeAndModel[randomMake]['models'][Math.floor(Math.random() * carDatabase.makeAndModel[randomMake]['models'].length)] : alert("make does not exist in database");
//     cars.push(carMaker(randomYear, randomMake, randomModel, randomColor,randomPrice));
//   }


//   return cars;
// };


var sampleCarList = helpers.carFactory(helpers.carDatabase, helpers.carMaker, 500);
console.dir(sampleCarList);

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
  //console.log('allBlueCars are ',allBlueCars);
  return allBlueCars;
};
var findBlueCarsTest = findBlueCars(sampleCarList);
console.log('findBlueCars is ',findBlueCarsTest);

// Find Cars By Color
var findColoredCars = function(carList,userColor){
  var allColoredCars = [];
  loop(carList, function(car){
    loop(car, function(value,key){
      if(key === 'color' && value === userColor){
        allColoredCars.push(car);
      }
    })
  })
  //console.log('all colored Cars are ',allColoredCars);
  return allColoredCars;
};

var findColoredCarsTest = findColoredCars(sampleCarList,'blue');
console.log('find Colored Cars is ',findColoredCarsTest);

// Find cars by year
var findCarsByYear = function(carList,userYear){
  var carsByYear = [];
  loop(carList, function(car){
    loop(car, function(value,key){
      if(key === 'yeah' && value === userYear){
        carsByYear.push(car);
      }
    })
  })
  //console.log('all Cars by year are ',carsByYear);
  return carsByYear;
};

var findCarsByYearTest = findCarsByYear(sampleCarList,1999);
console.log('find Cars by year is ',findCarsByYearTest);
// Find cars between 2 years


// Find cars by make
var findCarsByMake = function(carsList,userMake){
  var carsByMake = [];
  loop(carsList, function(car){
    loop(car,function(value,key){
      if(key === 'make' && value === userMake){
        carsByMake.push(car);
      }
    })
  })
  return carsByMake;
};

var carsByMakeTest = findCarsByMake(sampleCarList,'Nissan');
console.log('carsByMakeTest is ',carsByMakeTest);

// Find cars by make and model
var findCarsByMakeModel = function(carsList,userMake,userModel){
  var carsByMakeModel = [];
  loop(carsList, function(car){
    loop(car,function(value,key){
      //console.log('make is ', userMake,' and model is ',userModel,'car.model is ',car.model,' car make is ',car.make);
      if(car.make === userMake && car.model === userModel){
        carsByMakeModel.push(car);
      }
    })
  })
  return carsByMakeModel;
};

var carsByMakeModelTest = findCarsByMakeModel(sampleCarList,'Nissan','Altima');
console.log('carsByMakeModelTest is ',carsByMakeModelTest);
console.log('____________________');

// Find cars by price
//add `lowEndPrice` and a `highEndPrice`

var findByPrice = function(carsList,userPrice){
  var carsByPrice = [];
  var finalTestReturn;
  loop(carsList, function(car){
    loop(car,function(value,key){
      if(car.price === userPrice){
        carsByPrice.push(car);
      }
    })
  })
  if (!carsByPrice.length){
    return "there are no cars below the price you entered.";
  } else {
    return carsByPrice;
  }
  
};
var carsByPriceTest = findByPrice(sampleCarList,78000);
console.log('carsByPriceTest is ',carsByPriceTest);
console.log('____________________');

var findByPriceRange = function(carsList,lowEndPrice,highEndPrice){
  var carsByPriceRange = [];
  var finalTestReturn;
  loop(carsList, function(car){
    loop(car,function(value,key){
      if(car.price >= lowEndPrice && car.price <= highEndPrice){
        carsByPriceRange.push(car);
      }
    })
  })
  if (!carsByPriceRange.length){
    return "there are no cars below the price you entered.";
  } else {
    return carsByPriceRange;
  }
  
};
var carsByPriceRangeTest = findByPriceRange(sampleCarList,43000,78000);
console.log('carsByPriceRangeTest is ',carsByPriceRangeTest);
console.log('____________________');


// EXTRA CREDIT:
function Redirect() {
    alert('Redirecting you to cars.com because there are no cars that fit what you\'re looking for');
   window.location="http://www.cars.com";
}

//I am really not sure how I can match to more than 2 properties
// Find cars by using all categories.

var findCarsByAllProps = function(carsList,userMake,userModel,userYear,userColor){
  var carsByAllProps = [];
  var carsByAllProps2 = [];
  var finalCarsArray = [];
  var carsByAllProps3 = [];
  var finalText;
  // loop(carsList, function(car){
  //     var row = car;
  //     var match = true;  
  //     var samePropCount = 0;
  //     loop(car,function(value,key){
  //     if (key === 'color' && value === userColor){
  //       samePropCount++;
  //       if (key[value] != car[key]) {
  //         console.log('okokokok',car);
  //         match = false;
  //       }
  //     }
  //   })
  //   if (!samePropCount) match=false;
  //   if (match) {
  //     carsByAllProps.push(row);
  //   }
  // })
  loop(carsList, function(car){
    //console.log(carsList,'carsList')
    //loop(car,function(value,key){
      carsByAllProps.push(carsList);
      // return car.model == 'Juke' &&
      //      car.make == 'Leaf' &&
      //      car.color =='blue' &&
      //      car.yeah == 2008;
    //})
  })
  loop(carsByAllProps,function(arr,index){
    //console.log('arr is ',arr[index]);
    if(arr[index].make === userMake && arr[index].model === userModel && arr[index].color === userColor && arr[index].yeah === userYear){
      console.log('matching to make and model and color and year arr is ',arr[index]);
      finalCarsArray.push(arr[index]);
      // carsByAllProps3.push(arr[index]);
      // loop(carsByAllProps3, function(arr2,index2){
      //   console.log('arr2 is ',arr2[index2]);
        // if(arr2[index2].color === userColor){// && arr2[index2].yeah === userYear){
        //   console.log('arr[index].color 1 is ',arr2[index2].color,'arr[index].year is ',arr2[index2].yeah);
        //   carsByAllProps2.push(arr2[index2]);
        //   loop(carsByAllProps2,function(arr3, index3){
        //     if(arr3[index3].year === userYear){
        //      console.log(arr3,'arr3');
        //      finalCarsArray.push(arr3);
        //     }
        //   })
        // }
    } else {
      finalText = "there are no cars that fit what you're looking for";
    }
      
  })

      // carsByAllProps2.push(arr[index]);
      // loop(carsByAllProps2, function(arr2, index2){
        //console.log('arr2[index2].color is ',arr2[index2].color);
        // if(arr2[index2].color === userColor && arr2[index2].yeah === userYear){
        //   console.log('matching to make and model and color and year arr is ',arr2[index2]);
        // } 


  //console.log('okokokok',carsByAllProps);
  // carsByAllProps.filter(function (el) {
  //   console.log('okokokok',el);
  //   return el.model == 'Juke' &&
  //          el.make == 'Leaf' &&
  //          el.color =='blue' &&
  //          el.yeah == 2008;
  // });    


//                    match = false;
//                 }
//             }
//         }  
//     } 

    //console.log('2nd make is ',car.make,' and model is ',car.model,' color is ',car.color,' year is ',car.yeah);      
    // loop(car,function(value,key){
    //   //console.log('START make is ',car.make,' and model is ',car.model,' color is ',car.color,' year is ',car.yeah);      
    //    if (key === 'color' && value === userColor){
    //     console.log('2nd make is ',car.make,' and model is ',car.model,' color is ',car.color,' year is ',car.yeah);      
    //     loop (car,function(vaue,key){
    //       console.log('2.5nd make is ',car.make,' and model is ',car.model,' color is ',car.color,' year is ',car.yeah);      
    //       if (key === 'make' && value === userMake){
    //         console.log('3rd make is ',car.make,' and model is ',car.model,' color is ',car.color,' year is ',car.yeah);      
    //         loop (car,function(vaue,key){
    //           if (key === 'yeah' && value === userYear){
    //             loop(car, function(value,key){
    //               if (key === 'model' && value === userModel){
    //                 carsByAllProps.push(car);
    //               }
    //             })
    //           }
    //         })
    //       }
    //    }) 
    //   } 
    // })
  //})
  if (!finalCarsArray.length){
    return Redirect();//finalText;
  } else {
    return finalCarsArray;
  }
};

// yeah: 1999,
//     make: 'Nissan',
//     model: 'Altima',
//     color: 'champagne'

// yeah 2013
// make Nissan
// model Juke
// color red
var carsByAllPropsTest = findCarsByAllProps(sampleCarList,'Nissan','Altima',1992,'silver');
console.log('carsByAllPropsTest is ',carsByAllPropsTest);
//result carsByAllPropsTest is  [ { yeah: 1992, make: 'Nissan', model: 'Altima', color: 'silver' } ]

// var results = [];
// for (var i =0; i<source.length; i++) {
//     var row = source[i];
//     var match = true;  
//     var samePropCount = 0;
//     for (var prop in row) {
//         for (var cond in conditions) {
//             if (cond === prop ) {
//                 samePropCount++;
//                 if (conditions[cond] != row[prop]) {
//                    match = false;
//                 }
//             }
//         }  
//     } 
    // if (!samePropCount) match=false;
    // if (match) {
    //     results.push(row);
    // }
// }
// return results;




/*
************************************************
   EXTRA CREDITS and EXTRA EXTRA CREDITS
************************************************
*/
/*
************************************************
   Added Search by all 4 properties.
************************************************
*/
/*
************************************************
   Added Random Price to dataset, included now.
************************************************
*/
/*
************************************************
   Added findByPrice and findByPriceRange.
************************************************
*/
/*
*************************************************************
   Added Redirects for no results on multiple property search.
*************************************************************
*/


}());


