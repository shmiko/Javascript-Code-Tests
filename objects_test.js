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
//testing object property descriptors
log(Object.getOwnPropertyDescriptor(myHouse, 'type'));//this show the inner properties of the objext prototype
myHouse.type = 'Flat';//sets type property
log(myHouse.type);//displays type as Flat
// myHouse.writable = false; //disable writable property but we don't get an error
// myHouse.type = 'Unit'; //fails to display as it cannot be written
log(myHouse.type);
// Object.defineProperty(myHouse, 'type', {writable:false});//set object prop to writab;e false
// myHouse.type = 'Unit';//Cannot assign to read only property 'type' of #<House>
log(myHouse.type);// without strict mode no error 
myHouse.material/*.first*/ = 'Stone'; //this property can still be set despite writable type being false
log(myHouse.material);
//Object.freeze(myHouse.material);//this freezes the whole object, even for predefined properties
myHouse.material/*.first*/ = 'LimeStone'; //fails as object is now read only
log(myHouse.material);

//Testing Enumerable - can loop and show/hide properties
Object.defineProperty(myHouse,'material',{enumerable:false});

for (var propertyName in myHouse){
	log(propertyName + ': ' + myHouse[propertyName]);
}//this shows properties and values but not material

log(Object.keys(myHouse));//show properties but not material which enumerable is false
Object.defineProperty(myHouse,'material',{enumerable:true});
for (var propertyName in myHouse){
	log(propertyName + ': ' + myHouse[propertyName]);
}//this shows properties and values

log(Object.keys(myHouse));//show properties including material
log(JSON.stringify(myHouse));//show json object as sting

//testing configurable - this allows or disallows setting enumerable and writable properties
// Object.defineProperty(myHouse,'type',{configurable:false});
//try changing enumerable
Object.defineProperty(myHouse,'floors',{enumerable:true});
//Cannot redefine property: floors
//Cannot change configurable back to true as it is set to false?????
//if configurable is false you cannot delete a property
// delete myHouse.type;
//Cannot delete property 'type' of #<House>
// Object.defineProperty(myHouse,'floors',{configurable:true});//Cannot redefine property: floors
//You can however set writable to true or false.
// Object.defineProperty(myHouse,'floors',{writable:false});
log(myHouse);
myHouse.name = {first:'Lilly', last:'field'};
log(myHouse);
//testing getters and setters
//define a new property using get to display house type and material
Object.defineProperty(myHouse, 'fullName',
{
	get: function(){
		return this.name.first + ' ' + this.name.last
	}
});
log(myHouse);