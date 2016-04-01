// your code here

var testArray = [29, 15, 31, 101, 96, 77, 4, 19, 1];

function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}


distillPrimes = function(collection, callback, number){
	number = number || 0;
    console.log('number:',number)
    toolbelt.loop(collection, function(num,ind){
        if(callback(num,ind)){
            number = number + num;
            console.log(number,num);
        }

    })
    return number;
};



var testDistillPrimes = distillPrimes(testArray, function(startNumber,ind){
   return isPrime(startNumber);
});


