function testCallback(num,callback){
	console.log('Hello ');
	callback();
};

testCallback(7, callbackTest2);

function callbackTest2(){
	console.log('Paul - I am the callback!');
};

