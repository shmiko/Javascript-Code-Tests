function logStuff(userData) {
    if ( typeof userData === "string")
    {
        console.log(userData);
    }
    else if ( typeof userData === "object")
    {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }
    }
};
function getInput(options, callback) {
	var allUserData = [];
    allUserData.push(options);
    callback(options);
}
getInput({name:"Rich", speciality:"JavaScript"}, logStuff);