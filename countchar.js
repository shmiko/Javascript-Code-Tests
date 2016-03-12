function countChar(str1,str2){
	var count = 0;
	for (var i = 0; i < str1.length; i++){
		if (str1.charAt(i) == str2){
			count += 1;
		}
	}
	return count;
}

//console.log(countChar("kingdomKlanKlubK", "k"));
// → 4


function countBs(str){
	// var count = 0;
	// for (var i = 0; i < str.length; i++){
	// 	if ( str.charAt(i) == 'B'){
	// 		count += 1;
	// 	}
	// }
	// return count;
	return countChar(str,"B");
};
//console.log(countBs("Bollybood"));
// → 2

console.log(countBs("BBC"));
console.log(countBs("BollyBood"));
// → 2
console.log(countChar("kakkerlak", "k"));
console.log(countChar("KingdomKlanKlubK", "K"));
// → 4