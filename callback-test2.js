function writeMySkills(myData) {
    if ( typeof myData === "string")
    {
        console.log(myData);
    }
    else if ( typeof myData === "object")
    {
        for (var item in myData) {
            console.log(item + ": " + myData[item]);
        }
    }
};
function getMyInput(options, callback) {
    var allMyData = [];
    allMyData.push(options);
    callback(options);
}
getMyInput({name:"Paul", skills:"JavaScript"}, writeMySkills);