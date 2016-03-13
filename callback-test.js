function testCallback(num,callback){
	console.log('Hello ');
	callback();
};

testCallback(7, callbackTest);

function callbackTest(){
	console.log('Paul - I am the callback!');
};