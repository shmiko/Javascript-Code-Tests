function isMin(num1,num2){
	if(num1 < num2 && num1 !== num2){
		return num1;
	}
	return num2;
};

console.log(isMin(12,13));