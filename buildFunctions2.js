function buildFunctions(){
	var arr = [];
	for (var i = 0; i < 3; i++){
		arr.push(function(j){
			return function(){
				console.log(j);
			}
		}(i));
		// arr.push(
		// 	(function(j){
		// 	return function(){
		// 		console.log(j);
		// 	}(i));
		// });
	}
	return arr;
};

var fs = buildFunctions();

console.log(fs[0]());
console.log(fs[1]());
console.log(fs[2]());

//returns 3,3,3
