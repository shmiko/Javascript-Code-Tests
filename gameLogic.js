(function(){

	window.gameLogic = {};

	gameLogic.createSquare = function(coordinates){
		var square = {
			name: 'square',
			coordinates: coordinates,
			state: null,
		};

		return square;
	};


	gameLogic.createGame = function(){

		var Game = {
			turnCount: 2,
			incrementTurnCount: function(){
				this.turnCount++
			},
			resetTurnCount: function(){
				this.turnCount = 2;
			},
			resetBoard: function(){
				this.board = gameLogic.createBoard(3);
			}
		}; 

		Game.resetBoard();
		
		return Game;
	};


	
	window.Game = gameLogic.createGame();

// ======================== GAME LOGIC STARTS HERE ====================================
_.each(array, function(val){ return val});
_.map(array, function(val){ return val + '!!!'});
_.filter(array, function(num){ return num % 2 === 0});
_.reduce(array, function(startNum, currNum) {return startNum + currNum}, 0);


	gameLogic.createBoard = function(num){
		console.log(num);
		// can use _.each, _.map, _.range x 2 to solve
		//return _.each(_.map(_.range(3, gameLogic.createGame(num))));
		_.each(_.map(_.range(3, gameLogic.createSquare(num)))
	};

var makeArray = function(number){
	// console.log('make array length should be ', number)
	var num = 0;
	var numArray = [];
	var numberArray = [];
	numArray.length = number;
	loop(numArray, function(arr, ind){
		numberArray.push(ind);
	})
	return numberArray;	
};
var testMakeArray = makeArray(10);
console.log(testMakeArray);

var i = 0;
var makeTicTacToeBoard = function(number){
	// boardArray.push(
		var matrixArray = [];
		var boardArray = [];
		loop(makeArray(number), function(arr,index){
			matrixArray.push(objToReplace);
			console.log('We are inside make tic tac toe',matrixArray,'matrixArray','index is ',index);
			
		})
		while (i < number){
			boardArray.push(matrixArray ); //this dosn't work either
			i++;
		}
	// )
	return boardArray;
}
console.log('next function makeTicTacToeBoard  -----------------------');

var testMatrix = makeTicTacToeBoard(3);
console.log(testMatrix);

var gameCreator = function(number){
	var gameObject = {};
	console.log('about to call makeTicTacToeBoard(number)');
	//makeTicTacToeBoard(number);
	gameObject.gameBoard = testMatrix;
	//gameObject.gameBoard =  makeTicTacToeBoard(3)
	gameObject.count = 0;
	return gameObject;
};
console.log('next function gameCreator  -----------------------');

var gameCreatorTest = gameCreator(3);
console.log('gameCreator will be ',gameCreatorTest);


	gameLogic.findSquare = function(board, coordinates){
		// can use _.each, _.find, or _.filter, or _.reduce
	};
	

	gameLogic.updateState = function(currentSquare, gameObject){
		// can use _.pluck to solve
	};
	
	
	gameLogic.checkHorizontalWin = function(currentSquare, board){
		// can use _.every to solve
	};

	gameLogic.playAgain = function(prompt, board){
		// can use _.each to solve

		// DO NOT TOUCH THE NEXT TWO LINES!!
		$('.square').removeClass("X");
		$('.square').removeClass("O");
	};
	
	gameLogic.catsGame = function(board){
		// _.can use every to solve
	};


	gameLogic.checkVerticalWin = function(currentSquare, board){
		// can use _.flatten, _.map, _.filter, every to solve.
	};


	gameLogic.checkDiagonalWin = function(currentSquare, board){
		// can use _.flatten, _.map, _.filter, every to solve.
	};


})();