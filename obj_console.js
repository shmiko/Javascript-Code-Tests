var obj123 = {
	first: 1,
	second: 2,
	third: 3
};
console.log(obj123);
obj123.first = 4;
obj123.second = 5;
obj123.third = 6;
console.log(obj123);
// 1 Comment C

var createObj123 = function(number){
  var obj = {};
  var collection = [];
  var numberNames = ['zero', 'first', 'second', 'third', 'fourth'];
  for (var i = 1; i < number; i++){
    obj[numberNames[i]] = i;
  };
  collection.push(obj);
  console.log(collection);

  return collection;
};
var collectionObj123 = createObj123(4);
console.log(obj123);
var changeObj = function(collection){
  for (var i = 0; i < collection.length; i++){
    for (var key in collection[i]){
      collection[i][key] = collection[i][key] + 3;
    } 
  }
};
changeObj(collectionObj123);
console.log(collectionObj123);