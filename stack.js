function Stack(){
	this._top = -1;
	this._value = [];
};

var data;
// console.log("this._top is: ",this.  );

Stack.prototype.push = function(data){
	console.log("passed in data is: ",data);
	this._top++;
	this._value[this._top] = data;
};

Stack.prototype.pop = function(){
	if(this._top < 0){
		return null;
	}

	var topElement = this._value[this._top];
	this._top--;

	this._value.length--;

	return topElement;
};

Stack.prototype.peek = function(){
	if(this._top < 0){
		return null;
	}
	return this._value[this._top];
};

var stack = new Stack();

console.log('The stack: ' + stack);


for (var i = 100; i <= 300; i+=100) {
  console.log('Pushing on stack: ' + i); 
  stack.push(i);
}

console.log('Top of the stack using Peek: ' + stack.peek());

console.log('Pop from stack. Popped element = ' + stack.pop());
console.log('Pop from stack. Popped element = ' + stack.pop());