# Debug Transform : 1.5/2

```
var transform = function(collection, callback){
 // missing var keyword
	results = [];

  // stick with best practices of naming your variables. Since you are building transform at this point rather than using it use variable names element and index
	loop(collection, function(element,str){

		results.push(callback(element,str));
	});
	return results;
};
```
> **Feedback:** There were a few flaws within this prompt. Check out the comments above.

# talkToUser function: 2/2

* [ ] Build a flexible function ```talkToUser``` that takes a collection of prompts and a string, promptType, and:
  * [ ] Use ```loop``` to iterate through an array of objects

  * [ ] if the ```promptType``` is equal to ```'log'```, log each prompt in the collection to the console using the native console.log function.

  * [ ] if the ```promptType``` is equal to ```'alert'```, alert the user of each prompt in the collection using the native alert function.

  * [ ] if the ```promptType``` is equal to ```'prompt'```, prompt the user with each prompt in the collection using the native prompt function.


> **Feedback:** The expectation was to use ```loop``` for this prompt. I know the instructions were a little unclear which is why I am giving your full credit. From looking at your code, I think you would have smashed it if instructions were clearer. I know that you understand.


# Build filterBy: 1.5/2

* [ ] use loop to build filterBy
* [ ] build a predicate

> **Feedback:** I love that you have advance knowledge about extending the Array.prototype, however, please stick to the prompts that we give you. Remember that filterBy takes in a collection, meaning either an array or object. Right now, your filterBy only works for arrays.


# Use filterBy with Predicate: 1.5/2

* [ ] test filterBy with predicate
* [ ] change that test predicate to an anonymous function

> **Feedback:** I know that you understand the material. Its clear that you have the logic. You are a rockstar. Just stick to the prompts and build functionality based on what is asked of you.


# Overall: 6.5/8


# Summary: You are obviously brilliant. Hands down. If you would have fixed some of the flaws in your code then you would have gotten a perfect score. Impressed with your use of prototype.


The Instruction Team
