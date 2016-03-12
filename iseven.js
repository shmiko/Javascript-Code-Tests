function isEven1(num){
	if (num % 2 == 0){
		return true;
	}
	return false;
};

console.log(isEven1(50));
console.log(isEven1(75));
console.log(isEven1(-1));
console.log('____________');

//using recursion
function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
};

console.log(isEven(50));
console.log(isEven(33));
console.log(isEven(-1));
