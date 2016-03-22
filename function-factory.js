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

function greaterThan(num1){
	return function(num2){ return num2 > num1 };
};

//assign first function to variable
var greaterThanTest = greaterThan(10);
//we can now run the first function by using the variable
console.log(greaterThanTest(11));

function greaterThan2(num1,callback){
	consolle.log("about to run callback");
	return callback(num1,num2);
};

//assign first function to variable
var greaterThanTest = greaterThan(10,testGreaterThan);
//we can now run the first function by using the variable
//console.log(greaterThanTest(11));
function testGreaterThan(num){
	return num2 > num1;
};

greaterThanTest(11);

