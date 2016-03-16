var sumRange = function(num1,num2){
	var sumArray = [];
	var totalSum = 0;
	var returnObj = {};
	for (var i = num1; i <= num2; i++){
		sumArray.push(i);
		totalSum += i;
	}
	returnObj.sumArray = sumArray;
	returnObj.totalSum = totalSum;
	return returnObj;
};

var runSumRange = sumRange(2,8);
//return array with numbers ranging from 1st arg to 
//last arg and then the sum of all
console.log('sum range from 2 to 8 should be 35',runSumRange);

//refactor to accept missing 3rd argument
var sumRangeStep = function(num1,num2,num3){
	var sumArray = [];
	var totalSum = 0;
	var returnObj = {};
	if(arguments[2] == null){
		num3 = 1;
	}
	for (var i = num1; i <= num2; i=i+num3){
		sumArray.push(i);
		totalSum += i;
	}
	returnObj.sumArray = sumArray;
	returnObj.totalSum = totalSum;
	return returnObj;
};

var runSumRangeStep = sumRangeStep(2,8,2);
var runSumRangeStep2 = sumRangeStep(2,8);
console.log(runSumRangeStep2);//this works
//return array with numbers ranging from 1st arg to 
//last arg but stepping over 3rd arg and then the sum of all
//2,8,2 steping over each 2nd number should return an array containing
//2,4,6,8 which in total = 20.

console.log('sum range from 2 to 8 , step of 2 should be 20',runSumRangeStep);
//this works