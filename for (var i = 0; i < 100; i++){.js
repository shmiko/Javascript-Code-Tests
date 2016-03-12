for (var i = 0; i < 100; i++){
	if (i % 3 !== undefined){
	 	console.log('Fizz');
	} elseif (i % 5 !== undefined) {
		console.log('Buzz');
	} elseif ( 1 % 3 && i % 5){
		console.log('FizzBuzz');
	} else {
		console.log(i);
	}
}