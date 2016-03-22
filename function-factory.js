function makeGreeting(language) {
 
    return function(firstname, lastname) {
     
        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);   
        }

        if (language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);   
        }
        
    }
    
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');


//create a function whihc returns a function
function greaterThan(num1){
	return function(num2){ return num2 > num1 };
};

//assign first function to variable
var greaterThanTest = greaterThan(10);
//we can now run the first function by using the variable
console.log(greaterThanTest(11)); //true correct

/*
*****************************
//This fails to pass 2nd param to callback 2nd arg
*****************************
//create a function which returns a callback to a function
function greaterThan2(num1,callback){
	return callback(num1,num2);
};

//assign first function to variable using a callback, we pass in the below function 
//which will do the actul comparrison
var greaterThanTest2 = greaterThan2(12,testGreaterThan);
//we can now run the first function by using the variable
//callback function takes 2 args
function testGreaterThan(num,num3){
	return num > num3;
};

console.log(greaterThanTest2(15));

*****************************
*/

//This works passing in an extra param to an extra arg which goes to the callback properly.
//create a function which returns a callback to a function
function greaterThan3(num1,num2,callback){
	return callback(num1,num2);
};

//assign first function to variable using a callback, we pass in the below function 
//which will do the actul comparrison
var greaterThanTest3 = greaterThan3(12,14,testGreaterThan3);
//we can now run the first function by using the variable
//callback function takes 2 args
function testGreaterThan3(num,num3){
	return num > num3;
};

console.log(greaterThanTest3); //false correct result

function noisy(f){
	return function(arg){
		console.log('calling with arg', arg);
		var val = f(arg);
		console.log('called with ', arg, ' and got ', val);
		return val;
	}
};

noisy(Boolean)(0);



