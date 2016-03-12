// for (var i = 0; i < 100; i++){
// 	if (i % 3 === 0){
// 	 	console.log('Fizz ', i, 'i % 3 is ', i % 3);
// 	} else if (i % 5 === 0) {
// 		console.log('Buzz ', i);
// 	} else if ( i % 3 === 0) {
// 		if (i % 5 === 0) {
// 			console.log('FizzBuzz ', i);
// 		} else {
// 			console.log('Fizz')
// 		}
// 	} else {
// 		console.log(i);
// 	}
// }

console.log('***************');

for (var i = 1; i <= 50; i++){
	var output = ""; //reset string to null every time
	if ( i % 3 == 0) {
		output += 'Fizz';
	}
	if (i % 5 == 0) {
		output += 'Buzz';
	} 
	console.log(output || i);
}

