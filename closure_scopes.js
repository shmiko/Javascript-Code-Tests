// HOW TO USE THESE NOTES: 
// Use these notes to follow along with the lesson. You can run the code in this file to reproduce what you see in the videos. 

// Scopes 
// Lexical scope: describes the regions in your source code where you can 
// refer to a variable by name without getting access errors
// Can understand rules of lexical scope even without running your code bc it only concerns area of code where different variable names have meaning, 
// Blocks within a function create a new lexical scope 

// Global Scope

// Global Scope starts under here 
function aHero () {  // Establish dummy global scope functions to return some words so the function calls in local scopes work
	return "Gal";
}
function aFoil () {
	return "Cow";
}
function aDeed () {
	return "Taps";
}

var hero = aHero();
var newSaga = function() { // <-- scope1 starts here
	var foil = aFoil();
	var saga = function() { // <-- scope2 starts here 
		var deed = aDeed();
		console.log(hero+deed+foil);
	}; // <-- scope2 ends here 
	saga();
	// -> GalTapsCow
	saga();
	// -> GalTapsCow
}; // <-- scope1 ends here
newSaga();
// -> GalTapsCow
newSaga();
// -> GalTapsCow

// HOW TO USE THESE NOTES: 
// Use these notes to follow along with the lesson. You can run the code in this file to reproduce what you see in the videos. 

var sagas = []; // global array to store saga function objects, accessible outside of the newSaga function 
var hero = aHero();
var newSaga = function(){
	var foil = aFoil();
	//var saga = function(){   -> now need to push saga function objects into the sagas array 
	sagas.push(function(){  
		var deed = aDeed();
		log(hero+deed+foil);
	});
};
newSaga();
sagas[0](); // invokes the first function stored in sagas array
sagas[0]();

newSaga();
sagas[1]();


