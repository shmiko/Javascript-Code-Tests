var createSquare = function(color){
	var square = {
		name: 'square',
	    piece: null,
	    color: color
	};

	return square;
};

var createCheckerBoard = function(num){
	// console.log(num);
	var board = _.range(num);
	_.each(board,function(space,index,board){
		console.log('board is:',board)
		if(index % 2 === 0){
			color = 'red';
		} else {
			color = 'black';
		}
		row = _.map(_.range(num), function(val){
			console.log('in map- val is  is:',val)
			
			console.log('color is:',color,' and num is:',num);
			return createSquare(color);
		});
		board[index] = row;
		return row;
	});
	// return board;
};

var makeArray = function(number){
	// var num = 0;
	var numArray = [];
	var numberArray = [];
	numArray.length = number;
	_.each(numArray, function(arr, ind){
		// console.log('each makeArray arr and ind is:',arr,ind)
		numberArray.push(ind);
	})
	// console.log('makeArray numberArray is:',numberArray)
	return numberArray;	
};

var objToReplace = {
		name: 'square',
	    piece: null,
	    color: 'someColor'
	};


var i = 0;
var makeCheckerBoard = function(number){
	// boardArray.push(
		var matrixArray = [];
		var boardArray = [];
		_.each(makeArray(number), function(arr,index){
			if(index % 2 === 0){
				objToReplace.color = 'red';
			} else {
				objToReplace.color = 'black';
			}
			// console.log('objToReplace.color',objToReplace.color,'objToReplace',objToReplace);
			matrixArray.push(objToReplace);
			// console.log('We are inside make checkerboard',matrixArray,'matrixArray','index is ',index,'arr',arr);
		})
		while (i < number){
			boardArray.push(matrixArray ); //this dosn't work either
			i++;
		}
		// console.log('boardArray',boardArray,'boardArray len',boardArray.length);
	return boardArray;
}
var testMatrix = makeCheckerBoard(8);
// console.log(testMatrix);


// var checkerBoard = createCheckerBoard(8);

// console.log(checkerBoard);
// console.log(checkerBoard[0][0]);
// console.log(checkerBoard[0][1]);


var board = _.range(num);
		_.each(board,function(space,index,board){
			row = _.map(_.range(num), function(val){
				return gameLogic.createSquare(index.toString() + val.toString());
			});
			board[index] = row;
		});
		return board;
var i = 0;
var makeCheckerBoard2 = function(number){
	var boardArray2 = [];
	_.each(_.range(number),function(index,board){
		_.map(_.range(num), function(val,index){
			if(index % 2 === 0){
				objToReplace.color = 'red';
			} else {
				objToReplace.color = 'black';
			}
			console.log('objToReplace.color:',objToReplace.color,'objToReplace:',objToReplace);
			boardArray2.push(objToReplace);
		});
	});
	console.log('boardArray',boardArray2,'boardArray len',boardArray2.length);
	return boardArray2;
}
var testMatrix2 = makeCheckerBoard2(8);
console.log('testMatrix2:',testMatrix2);




var createBoard2 = function(num){
	var board = _.map(_.range(num), function(value,index)
	{
		// console.log('value,index',value,index);
		if (index === 0 || index % 2 === 0)
		{
			return _.map(_.range(num), function(value,index)
			{
				// console.log('1st index value2,index2',value,index);
				if (index === 0 || index % 2 === 0)
				{
					// console.log('1st index red');
					return {
						name: 'square',
						piece: null,
						color: 'red'
					}
				} else {
					// console.log('1st index black');
					return {
						name: 'square',
						piece: null,
						color: 'black'
					}
				}
			})
		} else {
			return _.map(_.range(num), function(value,index)
			{
				// console.log('2nd index value2,index2',value,index);
				if (index === 0 || index % 2 === 0)
				{
					// console.log('2nd index red');
					return {
						name: 'square',
						piece: null,
						color: 'red'
					}
				} else {
					// console.log('2nd index black');
					return {
						name: 'square',
						piece: null,
						color: 'black'
					}
				}
			})
		}
	});
};

// console.log('createBoard2',createBoard2(8));

var arrOfNumbers = [1,2,3,4,5];

var ArraysMult2 = _.reduce(arrOfNumbers, function(startValue,currentNUmber){
	var currentMult2 = currentNUmber * 2;
	startValue.push(currentMult2);
	return startValue;
},[]);

// console.log('',ArraysMult2);


var createBoard3 = function(num){
	var board = _.reduce(_.range(num), function(startValue,currentElement)
	{
		if (currentElement === 0 || currentElement % 2 === 0)
		{
			startValue.push(_.map(_.range(num), function(value,index)
			{
				if (index === 0 || index % 2 === 0)
				{
					return {
						name: 'square',
						piece: null,
						color: 'red'
					}
				} else {
					return {
						name: 'square',
						piece: null,
						color: 'black'
					}
				}
		
			}))
			console.log('1st startValue:',startValue);
			return startValue;
		} else 
		{
			startValue.push(_.map(_.range(num), function(value,index)
			{
				if (index === 0 || index % 2 === 0)
				{
					return {
						name: 'square',
						piece: null,
						color: 'red'
					}
				} else {
					return {
						name: 'square',
						piece: null,
						color: 'black'
					}
				}
			}))
		}
		console.log('2nd startValue:',startValue);
		return startValue;
	},[]);
};

// console.log('createBoard3',createBoard3(8));
