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

//if we create a new array and try to access the last property it will be undefined
//set the object defineProperty to the Array.prototype
Object.defineProperty(Array.prototype,'last',{get:function(){
	return this[this.length-1];
}}); //this will allow all array objects to inherit the last property
var arr2 = ['one','two','three'];
log(arr2.last);//this works

//var array = [] is the same as using var array = new Array[]
//which is accessing the array prototype.

//the top level prototype is object
var myFunction = function(){};
log(myFunction.prototype); //returns {}
//object does not have a prototype
var cat = {name: 'fluffy'};
log(cat.prototype); //undefined

//it does have the __proto__ preperty
log(cat.__proto__);