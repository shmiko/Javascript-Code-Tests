var personMaker = function(name, age, allergies, dislikes){
	return {
		name: name,
		age: age,
		allergies: allergies,
		dislikes: dislikes,
	};
};
// only want the people who like meat, olives, bread, cheese
var Albrey = personMaker('Albrey', 37, ['nuts', 'oregano'], ['meat', 'olives']);
var Jon = personMaker('Jon', 31, ['cheese', 'meat'], []);
var Kristina = personMaker('Kristina', 29, ['fish', 'cactus'], ['anything burnt', 'bad service']);
var Bianca = personMaker('Bianca', 81, ['cotton candy'], ['vegetables', 'nuts']);
var Shanna = personMaker('Shanna', 10, [], ['places that are far away from home']);
//['meat','cheese','bread','olives']

var people = [Albrey, Jon, Kristina, Bianca, Shanna];

var foodsTest = ['meat','cheese','bread','olives'];

// var loop = function(collection,callback,arr){
// 	var peopleArray = [];
// 	var torf;
// 	var tempName;
// 	if (Array.isArray(collection)){
// 		console.log('torf:',torf,'1st Array is:',collection,'arr is:',arr);
// 	    for (var i = 0; i < collection.length; i++){
// 	    	console.log('do we have allergy or dislike',collection[i],'arr is:',arr);
// 	    	if(collection[i]['allergies'] || collection[i]['dislikes']){
// 	    		if(collection[i]['allergies'][0] || collection[i]['dislikes'][0] 
// 	    			|| collection[i]['allergies'][1] || collection[i]['dislikes'][1]
// 	    			== arr[0] || arr[1] || arr[2] || arr[3]){
// 	    			// for (var j = 0; j < collection[i][key].length; j++){
// 	    			console.log('arr[0] || arr[1] || arr[2] || arr[3]:',arr[0],arr[1],arr[2],arr[3]);
// 					console.log('collection[i].name:',collection[i].name,'1we have allergy or dislike value',collection[i]['allergies'][0]);
// 					console.log('collection[i].name:',collection[i].name,'2we have allergy or dislike value',collection[i]['allergies'][1]);
// 					console.log('collection[i].name:',collection[i].name,'3we have allergy or dislike value',collection[i]['dislikes'][0]);
// 					console.log('collection[i].name:',collection[i].name,'4we have allergy or dislike value',collection[i]['dislikes'][1]);
// 						  //   	for (var key in collection[i]){
// 						  //   		tempName = '';
// 						  //     		console.log('torf:',torf,'Inside 1st object is:',collection[i][key]);

// 							 //    	//if(collection[i].'allergies' === allergies){
// 							 //    		if(Array.isArray(collection[i][key])){
// 							 //    			console.log('it is collection[i][key] is:',collection[i][key]);			      	
// 								// 	      	for (var j = 0; j < collection[i][key].length; j++){
// 								// 	      		// if(torf){
// 								// 	      		console.log('torf:',torf,'Inside collection[i][key] is:',collection[i][key][j]);
// 								// 	      		//now loop arr to match to collection[i][key][j]
// 								// 	      		for (var k = 0;k<arr.length;k++){
// 								// 	      			console.log('arr[k]:',arr[k],'matching to collection[i][key][j]',collection[i][key][j],'do we return this person?:',collection[i].name,'torf:',torf);
// 								// 			      	if(collection[i][key][j] !== arr[k] && torf){
// 								// 				      	torf = true;
// 								// 				      	tempName = collection[i].name;
// 								// 				      	console.log('if no match tempName:',tempName);
// 								// 			      	} else {
// 								// 			      		console.log('alergy or dislike detected');
// 								// 			      		torf = false;
// 								// 			      	}
// 								// 			    }
// 								// 				// }
										      	
// 								// 		    }
// 								// 		    //console.log('peopleArray:',peopleArray);
										    
// 								// 	}
// 								// }
// 	    		} else {
// 	    		console.log('we DO NOT have allergy or dislike value -- add person to array');
// 	    		tempName = collection[i].name;
// 			//  if(tempName.length > 0){
// 			    peopleArray.push(tempName);
// 			    console.log('peopleArray:',peopleArray);
// 			//     callback(peopleArray);
			    
// 			}
// 	    }
	   
// 	  }
// 	}
// }


// var filterBy = function(collection,callback,arr){
// 	var newArray = [];
// 	console.log('1st filterByarr is:',arr);
// 	//loop through object to get to array	
// 	loop(collection, function(valueOne,ind){
// 		console.log('1st returned from loop',valueOne,ind);
// 		return valueOne;
// 		//loop through passed in 3rd arg array with list of foods to look for
// 		// loop(arr, function(valueTwo,ind){
// 		// 	console.log('2nd value',valueTwo);
// 		// 	// if (collection[ind].indexof(valueTwo[ind])) {
// 		// 	// 	console.log('collection[ind]:',collection[ind],'valueTwo:',valueTwo);
// 		// 	// 	newArray.push(collection[ind]);//put true value into new array to be returned
// 		// 	// }
// 		// })	
// 	},arr)
// 	// return newArray;
// };
// your code here

// var filterPeople = function(collection,arr){
// 	var peopleArray = [];
// 	filterBy(collection,function(el,ind){
// 		console.log('el is: ',el,' and ind should be:', ind);
// 		peopleArray.push(el[ind]);	
// 	},arr)
// 	console.log('peopleArray', peopleArray);
// 	return peopleArray;
// };

// var pizzaPartyParticipants = filterPeople(people,['meat','cheese','bread','olives']);

//console.log(pizzaPartyParticipants)
// ['Kristina', 'Shanna', 'Bianca'];


// var testfilterByFood = filterByAnyFood(people,['meat','cheese','bread','olives']);
// console.log('testfilterByFood:',testfilterByFood);

// var filterPeople2 = function(collection,arr){
// 	var peopleArray = [];
// 	var test;
// 	var test2;
// 	var matched = false;
// 	toolbelt.filterBy(collection,function(el,ind){
// 		// console.log('el is: ',el,' and ind should be:', ind,'el[ind]:',el[ind]);
// 		// toolbelt.loop(arr,function(element,index){
// 			// console.log('el[allergies][index] is: ',el,' and el[dislikes][index] should be:', el['dislikes'][index]);
// 			test = el['allergies'];//[index];
// 			test2 = el['dislikes'];//[index];
// 			console.log('test:',test,'test2',test2,'element is:',el);
// 			if(test[ind] != el && test2[ind] != el && !matched){
// 				// console.log('NO MATCH test:',test[index],'NO MATCH test2',test2[index]);
// 				peopleArray.push(el.name);	
// 				// console.log('inside loop peopleArray', peopleArray);
// 			} else {
// 				// console.log('matched stop looking');
// 				matched = true;
// 				// break;
// 			}
// 		// })
// 		matched = false;
// 	},arr)
// 	// console.log('peopleArray', peopleArray);
// 	return peopleArray;
// };

toolbelt.filterPeople = function(collection,foodsTest,prop,prop2){
	var peopleArray = [];
	var testArray = [];
	//lets try and get a new array of all allergies and dislikes
		toolbelt.loop(collection,function(el,ind){
			testArray.push(el.allergies);
			testArray.push(el.dislikes);
		})
		toolbelt.loop(collection,function(val,index){


		var bKeepOrNot = false;
		console.log('ist loop val name',val['name']);
		console.log('1st name is ',collection[index]['name']);
		toolbelt.loop(testArray,function(el,ind){
			console.log('2nd loop',el);
			bKeepOrNot = false;
			//toolbelt.loop(el,function(key,prop){
			//console.log('key is',key);

			//console.log('array length',key.length);
			//if (key.length > 0 && Array.isArray(key)){
				console.log('now filter this');
				// var tryThis = key[prop];
				// toolbelt.filterBy(tryThis,function(element, index){
				
			    var toReturn = true;
			    
				  for (var a = 0;a < el.length; a++){
				  	console.log('el a',el[a]);
				    for(var i = 0; i < foodsTest.length; i++){
				    console.log('foodsTest[i]',foodsTest[i],'bKeepOrNot',bKeepOrNot);
				      if (el[a] === foodsTest[i] && bKeepOrNot == false){ 
				      	console.log('we have match a dislike or allergy now add el',el.name);
				        bKeepOrNot = true;
				      } 

				    }
				    
				 }
			bKeepOrNot = false;	 
			})
			if(!bKeepOrNot){
			    peopleArray.push(val['name']);
			    console.log('pushed name is ',val['name']);
			}
			
		})
		console.log(peopleArray);
		  	return peopleArray;
}
		  //})

		 //})
	  
	
// };


var testfilterByAnyPriceAverage = toolbelt.filterPeople(people,foodsTest,'allergies','dislikes');


