var str = '';
	
for (var i = 0; i < 7; i++){
	str = str + '#';
	// if (str.length == 5 || str.length == 6 ||str.length == 7){
	// 	var anotherStr = '####';
	// 	console.log(anotherStr + str);
	// } else {
		console.log(str);
	// }
}
str = '#######';
for (var i = 7; i > 0; i--){
	// if (str.length == 5 || str.length == 6 ||str.length == 7){
	// 	var anotherStr = '####';
	// 	console.log(anotherStr + str.substring(str.length - i));
	// } else {
		console.log(str.substring(str.length - i));
	// }
}
// str = '        ';
// for (var i = 0; i < 7; i++){
// 	str = str + '#';
// 	console.log(str);
// }
// str = '#######       ';
// for (var i = 14; i > 0; i--){
// 	console.log(str.substring(str.length - i));
// }