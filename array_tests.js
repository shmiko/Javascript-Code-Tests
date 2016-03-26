'use strict'
var log = function log(value){
	console.log(value);
};
//testing Prototypes and Inheritance
var arr = ['red','blue','green'];

Object.defineProperty(arr,'last',{get:function(){
	return this[this.length-1];
}});
var last = arr.last;
log(last);