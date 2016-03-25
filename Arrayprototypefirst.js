'use strict';
	

if (!Array.prototype.first){
	Array.prototype.first = function(predicate){
		console.log('predicate is ',predicate);
		if (this == null)
			throw new TypeError();
		if (typeof predicate != 'function')
			throw new TypeError();

		for (var i = 0; i < this.length; i++) {
			if (predicate(this[i])) {
				console.log(this[i]);
				return this[i]; //not return match
			}
		}
		return null;
	}
}

//usage
var items = [
	{ Name : "Matthew", Id : 1 }, //object literals use colons, not equals
	{ Name : "Mark", Id : 2 },
	{ Name : "Luke", Id : 3 },
	{ Name : "John", Id : 4 }
	];
// Find the item with Id === 3
var matching = items.first(function(i) { 
	return i.Id === 3 
});