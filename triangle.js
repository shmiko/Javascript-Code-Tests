function triangle( n ) {
	var str = "";
	n = parseInt(n,10);
	for (var i = 0; i < n; i++){
		str = str + '#';
		console.log(str);
	}
};
triangle(9);
