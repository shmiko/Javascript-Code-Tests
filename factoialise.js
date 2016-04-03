function FirstFactorial(num) { 

  // code goes here  
	if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num == 0) {
        return 1;
    }
    var tmp = num;
    while (num-- > 2) {
        tmp *= num;
    }
    return tmp;
  return num; 
         
}
   
// keep this function call here 
FirstFactorial(9); //362880