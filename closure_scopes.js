// HOW TO USE THESE NOTES: 
// Use these notes to follow along with the lesson. You can run the code in this file to reproduce what you see in the videos. 

// Scopes 
// Lexical scope: describes the regions in your source code where you can 
// refer to a variable by name without getting access errors
// Can understand rules of lexical scope even without running your code bc it only concerns area of code where different variable names have meaning, 
// Blocks within a function create a new lexical scope 

// Global Scope

// Global Scope starts under here 
function aFavoriteSuperhero () {  // Establish dummy global scope functions to return some words so the function calls in local scopes work
	return "BananaMan";
}
function aFavoriteVillain () {
	return "BlenderMan";
}
function aFightBetweenGoodAndBad () {
	return " Traps ";
}

var Superhero = aFavoriteSuperhero();
var newDoIt = function() { // <-- scope1 starts here
	var favoriteVillain = aFavoriteVillain();
	var doIt = function() { // <-- scope2 starts here 
		var Task = aFightBetweenGoodAndBad();
		console.log(Superhero+Task+favoriteVillain);
	}; // <-- scope2 ends here 
	doIt();
	// -> BananaMan Traps BlenderMan
	doIt();
	// -> BananaMan Traps BlenderMan
}; // <-- scope1 ends here
newDoIt();
// -> BananaMan Traps BlenderMan
newDoIt();
// -> BananaMan Traps BlenderMan

// HOW TO USE THESE NOTES: 
// Use these notes to follow along with the lesson. You can run the code in this file to reproduce what you see in the videos. 

var sagas = []; // global array to store saga function objects, accessible outside of the newSaga function 
var Superhero = aFavoriteSuperhero();
var newSaga = function(){
	var favoriteVillain = aFavoriteVillain();
	//var saga = function(){   -> now need to push saga function objects into the sagas array 
	sagas.push(function(){  
		var Task = aFightBetweenGoodAndBad();
		console.log(Superhero+Task+favoriteVillain);
	});
};
newSaga();
sagas[0](); // invokes the first function stored in sagas array
sagas[0]();

newSaga();
sagas[1]();


