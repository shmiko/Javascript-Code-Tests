'use strict'

function House(material,type,floors,location){
	this.material = material;
	this.type = type;
	this.floors = floors;
	this.location = location; 
};

var myHouse = new House('Brick','Duplex',2,'Windsor');
//if you remove the new keyword the property cannot be set and returns undefined
var yourHouse = new House('Fibro','Villa',1,'San Franisco');


var log = function log(value){
	console.log(value);
};

myHouse.landSize = '2 Acre';



log(myHouse); //returns all properties and values assigned to myHouse
log(yourHouse); //returns all properties and values assigned to yourHouse
log(myHouse.landSize); //returns just landsize value of myHouse
log(myHouse['floors']); //returns just the floors value of myHouse
log(Object.getOwnPropertyDescriptor(myHouse, 'type'));//this show the inner properties of the objext prototype
myHouse.type = 'Flat';//sets type property
log(myHouse.type);//displays type as Flat
// myHouse.writable = false; //disable writable property but we don't get an error
myHouse.type = 'Unit'; //fails to display as it cannot be written
log(myHouse.type);
Object.defineProperty(myHouse, 'type', {writable:false});//set object prop to writab;e false
// myHouse.type = 'Unit';//Cannot assign to read only property 'type' of #<House>
log(myHouse.type);// without strict mode no error 
myHouse.material = 'Stone';
log(myHouse.material);