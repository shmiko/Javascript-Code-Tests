var loop = function(arr, callback){
    for (var i = 0; i < arr.length; i++){
        callback(arr[i]);
    }
};
// prints an element to the console
var print = function(element){
    console.log(element.toUpperCase());
};



var arr = ['hi', 'my', 'name', 'is', 'albrey'];

loop(arr, print);
// hi
// my
// name
// is
// albrey
// callback!
