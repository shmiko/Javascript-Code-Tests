var books = [
    {
        title: "Showings",
        author: "Julian of Norwich",
        checkouts: 45
    },
    {
        title: "The Triads",
        author: "Gregory Palamas",
        checkouts: 32
    },
    {
        title: "The Praktikos",
        author: "Evagrius Ponticus",
        checkouts: 29
    }
];

var testReduce = function(arrOfBooks){
	var bookCheckouts = 0;
	for (var i = 0; i < arrOfBooks.length; i++){
		bookCheckouts =+ arrOfBooks[i].checkouts;
	}
	return bookCheckouts;
};

var bookCheckouts2 = books.map(function(item){
	return item.checkouts;
});

var total1 = books.reduce(function(prev,curr){
	return prev + curr;
});

total = books
            .map(function(b) { 
            	return b.checkouts; 
            })
            .reduce(function(p, c) { 
            	return p + c; 
            });

console.log(total1);

var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(
	function(flat, current) {
		console.log(flat,current);
  		return flat.concat(current);
	}, []
	)
); //passes anon funct then an empty array








