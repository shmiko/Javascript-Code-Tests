(function() {
  'use strict';

  window.bookstoreApp = {};

 
// Do not touch this variable, it is your Bookstore and you can use this to test your code as you go along.

var Bookstore = window.Bookstore;

var Kanye = window.Kanye;



bookstoreApp.filterByCategory = function(bookstore, category){
 	var results = [];

 	toolbelt.loop(bookstore, function(bookObj){
 		if (bookObj.category === category) {
 			console.log(bookObj);
 			results.push(bookObj)
 		}
 	})
 	return results;
};

bookstoreApp.filterByAuthor = function(bookstore, author) {
	var results = [];

	toolbelt.loop(bookstore, function(bookObj){
		if (bookObj.author === author) {
			results.push(bookObj)
		}
	})
	return results;
};


bookstoreApp.filterByRange = function(bookstore, lowerEnd, upperEnd){
	var results = [];
	if (lowerEnd === null){
		lowerEnd = 1;
	}
	console.log(lowerEnd,upperEnd);
	toolbelt.loop(bookstore, function(bookObj){
		if (bookObj.price > lowerEnd && bookObj.price < upperEnd) {
			results.push(bookObj)
		}
	})
	return results;
};

bookstoreApp.addBookToCart = function(user, bookStore, bookTitle){
	var results = [];
	console.log('bookStore:',bookStore,'user:',user,'bookTitle:',bookTitle,'cart:',user.cart);
	toolbelt.loop(bookStore, function(bookObj){
		if (bookObj.title === bookTitle ) {
			//user.balance =+ bookObj.price; 
			//user.balance = user.balance + bookObj.price;
			user.cart.push(bookObj);
			//user.cart.push({book:bookObj.title,balance:user.balance,price:bookObj.price});
		}
	})
	return 'user cart is ' + user.cart;
};


bookstoreApp.deleteFromCart = function(user, bookTitle){
	toolbelt.loop(user, function(userObj,ind){
		console.log('user obj',userObj.ind,bookTitle,'ind:',ind)
		if (ind == 'cart' ) {
			console.log('car title',userObj.title,bookTitle)
			// if (userObj.ind === bookTitle ) {
			 userObj.splice(bookTitle,1);
			
			 
		}
	})
	 console.log('ind:',user);
	return user;
};

bookstoreApp.emptyCart = function(user){
	
};



bookstoreApp.checkout = function(user){

};







}());


