function triangle( n ) {
	var str = "";
	n = parseInt(n,10);
	for (var i = 0; i < n; i++){
		str = str + '#';
		console.log(str);
	}
};
triangle(9);


​function logStuff(userData) {
    if ( typeof userData === "string")
    {
        console.log(userData);
    }
    else if ( typeof userData === "object")
    {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }
​
    }
​
};
​
​var allUserData;

allUserData = [];

​// A function that takes two parameters, the last one a callback function​
​function getInput(options, callback) {
    allUserData.push (options);
    callback (options);
​
};
​
​// When we call the getInput function, we pass logStuff as a parameter.​
​// So logStuff will be the function that will called back (or executed) inside the getInput function​
getInput ({name:"Rich", speciality:"JavaScript"}, logStuff);
​//  name: Rich​
​// speciality: JavaScript
