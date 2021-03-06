var loop = function(collection, callback){

  if (Array.isArray(collection)){
  	// console.log('is this an array?',collection, 'we will be calling this', callback)
    for (var i = 0; i < collection.length; i++){
      // console.log(collection, 'collection inside loop');
      callback(collection[i], i);
    }
  } else if (typeof collection === 'object'){

    for (var key in collection){
    	// console.log('key is ',key, ' and value is ', collection[key]);
      	callback(collection[key], key);
      	// console.log(key);
    }
  }
};


// 1. Build transform. Used to transform object, string into an array.
var transform = function(collection, callback){
  // console.log('collection is',collection);
  var results = [];
  loop(collection, function(element,str){
    console.log('Element in collection: ', element,' and str is', str);
    results.push(callback(element,str));
    // console.log(
    //   'We have collected the transformed value: element & str', element,str
    // );
  });
   console.log("this is the results in transform", results)
   return results;
};

// 2. allNumbersMultipliedByThree

var listOfNumbers= [1, 2, 3, 4];

var multByFive = function(number){
	console.log('loops callback invoked multByFive', number);
    return number * 5
};

var fives = transform(listOfNumbers, multByFive);

console.log('fives is:',fives);

// 3. bestSentenceToUpperCase
var bestSentence = "This is the best six week course ever!";

var newArray = [];
var sentenceToUpperCase = transform(bestSentence.split(), function(value){
	// console.log('value is ', value);
	var bestSentenceToUpperCase = value.toUpperCase();
	// console.log(bestSentenceToUpperCase)

	return bestSentenceToUpperCase.toString();
});

console.log(sentenceToUpperCase);


// 4. collectedContents
var person = {name: 'Jon', greatestFear: 'fearItself'};

newArray = [];

var collectedContents = transform(person, function(value,key){
	// console.log('value is ',value,' and key is ',key);
	newArray.push(key,value);
	// console.log('newArray is ', newArray);
	return newArray;
});

// var testCollectionContents = collectedContents();
console.log(collectedContents);
// 5. multByThree

var numbers = [1, 2, 3, 4, 5];
var anotherArray = [];
var multByThree = transform(numbers,function(el, index){
	// anotherArray.push(el * 3);
	return el * 3;
	// console.log(anotherArray, ' is anotherArray');
	// return ' this is the return array ' + anotherArray;
});

// var numbers = [1, 2, 3, 4, 5];
// var multipliedByThree = multByThree(numbers);
console.log(multByThree); // [3, 6, 9, 12, 15];

var numbers2 = [1, 2, 3, 4, 5];

var fives = transform(numbers2, function(number){
  return number * 5;
});

console.log(fives);


var multByThree = function(collection){
    return transform(collection, function(number){
      return number * 3;
    });
};

var multiply3 = multByThree(numbers);

console.log('multiply3 is ',multiply3);

// 6. upperCase

var upperCase = function(str){
	return transform(bestSentence.split(), function(value){
	// console.log('value is ', value);
		var bestSentenceToUpperCase = value.toUpperCase();
		// console.log(bestSentenceToUpperCase)

		return bestSentenceToUpperCase.toString();
	});
};
bestSentence = "This is the best six week course ever!";
console.log(upperCase,bestSentence);

// var bestSentenceUpperCased = upperCase(bestSentence);
// console.log(bestSentenceUpperCased) // "THIS IS THE BEST SIX WEEK COURSE EVER!";

// 7. contentsCollection

var contentsCollection = function(obj){
	return transform(person, function(value,key){
		// console.log('value is ',value,' and key is ',key);
		newArray.push(key,value);
		// console.log('newArray is ', newArray);
		return newArray;
	});
}
console.log(contentsCollection,person);

// 8. multByWhatever
var multByWhatever = function(collection, inputNum){
    return transform(collection, function(number){
      return number * inputNum;
    });
};

var multByWhateverTest = multByWhatever(numbers,10);

console.log('multByWhateverTest is ',multByWhateverTest);

// 9. divideByWhatever
numbers = [1, 2, 3, 4, 5];
var divideByWhatever = function(collection,inputNum){
	return transform(collection, function(number){
		return number / inputNum;
	})
}

var divideByWhateverTest = divideByWhatever(numbers,2);
console.log(divideByWhateverTest);
// 10. switchCase
var text = "This is the best six week course ever!";
var newSentence;
var switchCase = function(textin,textCase){
	return transform(textin.split(), function(value){
		switch (textCase) {
			case 'upper':
				newSentence = value.toUpperCase();
			break;
			case 'lower':
				newSentence = value.toLowerCase();
			break;
			default:
		}
		return newSentence;
	})
};

var testUpperOrLowerU = switchCase(text,'upper');
	testUpperOrLowerL = switchCase(text,'lower');

console.log(testUpperOrLowerU);
console.log(testUpperOrLowerL);

// 11. contentsCollector
var anotherNewArray = [];
var nCount = 0;
var contentsCollector = function(obj,specifier){
	return transform(obj, function(value,key){
		nCount++; //just used for debugging
		// console.log('obj is ',obj,' key is ',key,' value is ',value,' specifier is ', specifier);
		if (specifier == 'keys'){		
			anotherNewArray.push(key);
			// console.log('KEYS--retValue,retProp are ',value,key,' and array is ', anotherNewArray,' and nCount is ',nCount);
			return anotherNewArray;
		} else if (specifier == 'values'){
			anotherNewArray.push(obj[key]);
			// console.log('VALUES--retValue,retProp are ',value,key,' and array is ',anotherNewArray);
			return anotherNewArray;
		} else if (!specifier){
			anotherNewArray.push(obj);
			// console.log('neither','anotherNewArray is ',anotherNewArray);
			return anotherNewArray;
		}
	})
};
var person = {name: 'Jon', greatestFear: 'fearItself'};
var allKeysInPerson = contentsCollector(person, 'keys');
console.log(allKeysInPerson) // ['name', 'greatestFear'];

var allValuesInPerson = contentsCollector(person, 'values');
console.log(allValuesInPerson)  // ['Jon', 'fearItself'];

var keysAndValuesInPerson = contentsCollector(person);
console.log(keysAndValuesInPerson) // ['name', 'Jon', 'greatestFear', 'fearItself'];
// 13. makeArray


	
var makeArray = function(number){
	// console.log('make array length should be ', number)
	var num = 0;
	var numArray = [];
	var numberArray = [];
	numArray.length = number;
	loop(numArray, function(arr, ind){
		numberArray.push(ind);
	})
	return numberArray;	
};
var testMakeArray = makeArray(10);
console.log(testMakeArray);
// 14. makeRow
// numbers = [1, 2, 3, 4, 5];
// var divideByWhatever = function(collection,inputNum){
// 	return transform(collection, function(number){
// 		return number / inputNum;
// 	})
// }
//var anotherMakeArray = new makeArray(5);
// console.log('anotherMakeArray is ',anotherMakeArray, ' and length is ',anotherMakeArray.length )
var objToReplace = {state:null};
var rowArray = [];
var makeRow = function(array,objToReplace){
	// console.log('2nd array is ',array,' and objToReplace is ',objToReplace, ' and length is ',array.length);
	loop(array, function(arr, ind){
		// console.log('arr is ',arr,'ind',ind)
		// console.log(ind < anotherMakeArray.length/2);
		//if (ind < array.length){
			// break;
			// console.log('arr is ',arr,'ind',ind)
			arr = objToReplace;
			// console.log('arr is ',arr,'ind',ind)
			// console.log('arr[ind] is',arr[ind],'objToReplace is',objToReplace)
			// rowArray.push(arr);
			//console.log('arr is',arr)
			rowArray.push(arr);
			// console.log(rowArray,ind,array.length);
			if (ind == array.length -1){
				// return 
				// console.log(rowArray);
				// return rowArray;
			}
			// return 'resulting array with object is ' + rowArray;
		//} 
	})
	//return 'resulting array with object is ' + rowArray;
	// console.log(rowArray,'rowArray')
	return rowArray;
};
console.log(makeRow(makeArray(10),objToReplace));


	
// };
// 15. makeTicTacToeBoard
// var anotherMakeArray = new makeArray(4);

var i = 0;
var makeTicTacToeBoard = function(number){
	// boardArray.push(
		var matrixArray = [];
		var boardArray = [];
		loop(makeArray(number), function(arr,index){
			matrixArray.push(objToReplace);
			console.log('We are inside make tic tac toe',matrixArray,'matrixArray','index is ',index);
			
		})
		while (i < number){
			boardArray.push(matrixArray ); //this dosn't work either
			i++;
		}
	// )
	return boardArray;
}
console.log('next function makeTicTacToeBoard  -----------------------');

var testMatrix = makeTicTacToeBoard(3);
console.log(testMatrix);


//gameCreator

var gameCreator = function(number){
	var gameObject = {};
	console.log('about to call makeTicTacToeBoard(number)');
	//makeTicTacToeBoard(number);
	gameObject.gameBoard = testMatrix;
	//gameObject.gameBoard =  makeTicTacToeBoard(3)
	gameObject.count = 0;
	return gameObject;
};
console.log('next function gameCreator  -----------------------');

var gameCreatorTest = gameCreator(3);
console.log('gameCreator will be ',gameCreatorTest);



// 16. setXorO 
var nCount = 0;
var setXorO = function(gameObj,coordsArr){
	var row = coordsArr[0];
	var col = coordsArr[1];
	
	console.log('START ---- gameObjis:', gameObj,' coords:',coordsArr);
	nCount = gameObj.count;
	loop(gameObj,function(value,key){
		console.log('1ST LOOP using gameObj-----value: ',value,' and key: ',key)
		// if (key == 0){
		loop(value[row], function(arr,index){
			//console.log('key is zero arr and index are ', arr,' indx is ',index);
			
			if (index == row){
				//console.log('should be on row 0 ',arr,'index is',index);
				//loop(arr,function(value,key){
				//console.log('value and key are ',value,'key is',key);
				loop(arr,function(value,key){
					if (key == 'state' && gameObj.count/2 === 0 && value == null){
						console.log('redy to change state to x');
						key = 'x';
						gameObj.count++;
						console.log(' state should now be x - and it is: ', key);
					} else if (key == 'state' && value == null && gameObj.count%2 !== 0){
						console.log('redy to change state to o');
						key = 'o';
						gameObj.count++;
						console.log(' state should now be o, and it is: ', key);
					} else if (value != null){
						alert('this square has already been chosen');
					}
						
				})
			}
		})
	})
	console.log('original gameObj is: ',gameObj);
	return gameObj;
};

console.log('next function setXorO  -----------------------');

var myTicTacToeBoard1 = makeTicTacToeBoard(3);
var gameOne = gameCreator(myTicTacToeBoard1);
setXorO(gameOne, [0, 0]);
console.log('FINISHED ---- gameOne.gameBoard should now be ',gameOne.gameBoard);

console.log('next turn -----------------------');

setXorO(gameOne, [0, 2]);
console.log(gameOne.gameBoard);
/*
RESULTS

next function setXorO  -----------------------
We are inside make tic tac toe [ { state: null } ] matrixArray index is  0
We are inside make tic tac toe [ { state: null }, { state: null } ] matrixArray index is  1
We are inside make tic tac toe [ { state: null }, { state: null }, { state: null } ] matrixArray index is  2
about to call makeTicTacToeBoard(number)
START ---- gameObjis: { gameBoard:
   [ [ [Object], [Object], [Object] ],
     [ [Object], [Object], [Object] ],
     [ [Object], [Object], [Object] ] ],
  count: 0 }  coords: [ 0, 0 ]
1ST LOOP using gameObj-----value:  [ [ { state: null }, { state: null }, { state: null } ],
  [ { state: null }, { state: null }, { state: null } ],
  [ { state: null }, { state: null }, { state: null } ] ]  and key:  gameBoard
redy to change state to x
 state should now be x - and it is:  x
1ST LOOP using gameObj-----value:  1  and key:  count
original gameObj is:  { gameBoard:
   [ [ [Object], [Object], [Object] ],
     [ [Object], [Object], [Object] ],
     [ [Object], [Object], [Object] ] ],
  count: 1 }
FINISHED ---- gameOne.gameBoard should now be  [ [ { state: null }, { state: null }, { state: null } ],
  [ { state: null }, { state: null }, { state: null } ],
  [ { state: null }, { state: null }, { state: null } ] ]
next turn -----------------------
START ---- gameObjis: { gameBoard:
   [ [ [Object], [Object], [Object] ],
     [ [Object], [Object], [Object] ],
     [ [Object], [Object], [Object] ] ],
  count: 1 }  coords: [ 0, 2 ]
1ST LOOP using gameObj-----value:  [ [ { state: null }, { state: null }, { state: null } ],
  [ { state: null }, { state: null }, { state: null } ],
  [ { state: null }, { state: null }, { state: null } ] ]  and key:  gameBoard
redy to change state to o
 state should now be o, and it is:  o
1ST LOOP using gameObj-----value:  2  and key:  count
original gameObj is:  { gameBoard:
   [ [ [Object], [Object], [Object] ],
     [ [Object], [Object], [Object] ],
     [ [Object], [Object], [Object] ] ],
  count: 2 }
[ [ { state: null }, { state: null }, { state: null } ],
  [ { state: null }, { state: null }, { state: null } ],
  [ { state: null }, { state: null }, { state: null } ] ]

Original Object not getting updated despite what logging suggest???
*/

