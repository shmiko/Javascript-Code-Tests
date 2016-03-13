function buildFunctions(){
	var arr = [];
	for (var i = o; i < 3; i++){
		arr.push(function(){
			console.log(i);
		});
	}
	return arr;
};

var fs = buildFunctions();

console.log(fs[0]());
console.log(fs[1]());
fs[2]();

