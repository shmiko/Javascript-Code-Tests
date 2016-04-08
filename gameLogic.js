// var _ = require("underscore"); 
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

	gameLogic.createBoard = function(num){
		// console.log(num);
		var board = _.range(num);
		_.each(board,function(space,index,board){
			row = _.map(_.range(num), function(val){
				return gameLogic.createSquare(index.toString() + val.toString());
			});
			board[index] = row;
		});
		return board;
		// boardArray = [];
		// _.map(_.range(3), function(obj,key){
		// 	_.each(boardArray.push(obj),function(key){ return key;});
		// 	console.log('We are inside make tic tac toe',boardArray,'boardArray','key is ',key);			
		// })
		// return boardArray;
		// can use _.each, _.map, _.range x 2 to solve
		//return _.each(_.map(_.range(3, gameLogic.createGame(num))));
		// console.log(_.each(_.map(_.range(3), gameLogic.createSquare(num){return num}),funtion(val){return val}));
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
	window.testBoard = Game.board;
	window.testSquare = Game.board[0][0];

// ======================== GAME LOGIC STARTS HERE ====================================
testMakeSquare = gameLogic.createSquare(00);
console.log('square',testMakeSquare);

testMakeGame = gameLogic.createGame();
console.log('game',testMakeGame);
_.each(testMakeSquare, function(val){ return val});
_.map(testMakeSquare, function(val){ return val + '!!!'});
_.filter(testMakeSquare, function(num){ return num % 2 === 0});
_.reduce(testMakeSquare, function(startNum, currNum) {return startNum + currNum}, 0);
// var testRange = function repeat(times, VALUE) {
// 	return _.map( _.range(3,gameLogic.createSquare(VALUE){
// 		return VALUE;
// 	}));
// };

	 // console.log(_.map( _.range(3),gameLogic.createSquare(num){return num;}));
// var testRange = _.range(3,gameLogic.createSquare(00));
// console.log(testRange);

	
	console.log('create board',gameLogic.createBoard(3));

	gameLogic.findSquare = function(board, coordinates){
		// can use _.each, _.find, or _.filter, or _.reduce
		var result;
		_.each(board, function(row){
			if (result === undefined){
				result = _.find(row, function(square){
					return square.coordinates === coordinates;
				});
			};
		});
		if (result === undefined){
			result = 'Square not found';
		}
		return result;
	};

	console.log('find square', gameLogic.findSquare(testBoard,'00'));
	

	gameLogic.updateState = function(currentSquare, gameObject){
		// can use _.pluck to solve
		if (currentSquare.state === null && gameObject.turnCount % 2 === 0){
			console.log('this is player 2\'s turn');
			currentSquare.state = 'X';
			gameObject.incrementTurnCount();
		} else if (currentSquare.state === null && gameObject.turnCount % 2 === 1){
			console.log('this is player 1\'s turn');
			currentSquare.state = 'O';
			gameObject.incrementTurnCount();
		} else {
			return 'Current square is filled';
		}
	};
	Game.incrementTurnCount();
	console.log('updateState',gameLogic.updateState(testSquare,Game),testSquare);
	
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