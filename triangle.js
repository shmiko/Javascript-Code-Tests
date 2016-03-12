function diamond( n ) {
	var str = '';
	var spaces = " ";
	var rows = "* ";
	while( rows.length < 200 )
		{
		    spaces += spaces; // doubles length each time
		    rows += rows; // ditto
		}
	n = parseInt(n,10);
	for (var i = 0; i < n; i++){
		str = str + '#';
		console.log(str);
	}
	str = '#######';
	for (var i = 7; i > 0; i--){
		console.log(str.substring(str.length - i));
	}
	str = '***  **';
	var index = 0;
	// for(i = n-1; i >= 1; --i ){
	for(i = n-1; i >= 1; i-- ){
		index = index++;
		console.log('index is ',index);
		
		console.log('str is ',str);
		console.log('str at i is ',str[index]);
		var newstring = str.replace(str.substring(n-i,i), '#');
		// var newstring = str.replace(str[i], '#');
		// console.log('str is ',str.substring(n-i,i))
		console.log(newstring.substring(0,[i]));
		// console.log('strlen is ',str.length);
		// console.log('count is ',i);
		// console.log(str.substring(str.length - i));
	}
	console.log('*****************');
	// str = '1234567';
	   str = '.......';
	for(i = 7; i > 0; i-- ){
		// console.log('i is ',i);
		// console.log('str at i is ',str[i]);
		// console.log('str is ',str);
		console.log('strlen is ',str.length - (str.length - i));
		// var newstring = str.replace(str.substring(n-i,i), '#');
		//var newstring = str.replace(str.length - (str.length - i), '#');
		var newstring = str.replace(str.substring(n-i,1), '#');
		// var newstring = str.replace(str[i], '#');
		// console.log('str is ',str.substring(n-i,i))
			// console.log(newstring.substring(0,[i]));
		console.log(newstring);
		// console.log('strlen is ',str.length);
		// console.log('count is ',i);
		// console.log(str.substring(str.length - i));
	}
};
diamond(9);
