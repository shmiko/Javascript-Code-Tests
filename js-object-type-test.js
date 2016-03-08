(function() {
  'use strict';

var mysticalAnimal1 = {};
mysticalAnimal1.type = 'dragon';
console.log(mysticalAnimal1);


var testType =  function(str){
	mysticalAnimal1.type = str;
	console.log(mysticalAnimal1);
	return mysticalAnimal1;
};
testType('SoupDragon');


//results
/*
{ type: 'dragon' }
{ type: 'SoupDragon' }
*/
var mysticalAnimal2 = {};
mysticalAnimal2.type = 'lion';
console.log(mysticalAnimal1);
var animalMystical = mysticalAnimal2;
console.log(animalMystical);
//'Result is { type: 'lion' }'

animalMystical.type = 'spider';
console.log(animalMystical);
//'Result is { type: 'spider' }'

var testType =  function(mysticalAnimal2){
	 console.log("testType ",mysticalAnimal2);
	 return mysticalAnimal2;
  };
  testType();
  //'Result is { type: 'spider' }'

var testType1 =  function(mysticalAnimal2){
	console.log("testType1 ",mysticalAnimal2);
	return mysticalAnimal2;
};
testType1();
//'Result is undefined'

var testType2 =  function(str){
	var correctAnswer = str;
	console.log('testType2 correctAnswer is ',correctAnswer);
};
testType2(animalMystical);
//'Result is nothing'

  var testType3 =  function(str){
	 console.log("testType3 ",str);
	 return str;
  };
  testType3(animalMystical);


  function myFunc(theObject) {
   theObject.brand = "Toyota";
 }

 var mycar = {
   brand: "Honda",
   model: "Accord",
   year: 1998
 };

 myFunc(mycar);



function myFunction(a, b) {
    return a * b;
};

var numbercal = myFunction(4, 3);
console.log(numbercal);

function strict(){
  // Function-level strict mode syntax
  'use strict';
  function nested() { return "And so am I!"; }
  return "Hi!  I'm a strict mode function!  " + nested();
}
function notStrict() { return "I'm not strict."; }

var newtest = strict();
console.log(newtest);

var newtest2 = notStrict();
console.log(newtest2);


}());

