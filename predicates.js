Array.prototype.all = function (p) {
  // TODO: Implement this function
  var fa = [1,2,3];
  for (var i = 0; i < fa.length; i++){
    if (isGreaterThanZero(i)){
     var nResult = 1;
    }
  };
  if (nResult == fa.length){
  	return true;
  } else {
  	return null;
  }
};

Array.prototype.none = function (p) {
  // TODO: Implement this function
  return null;
};

Array.prototype.any = function (p) {
  // TODO: Implement this function
  return null;
};


function isGreaterThanZero (num) {
  return num > 0;
}

function isLessThanZero (num) {
  return num < 0;
}



isGreaterThanZero([1, 2, 3]);

function negative(x) {
    return x < 0;
}
function positive(x) {
    return x > 0;
}
var nonzero = or(negative, positive);
alert(nonzero(-5));
alert(nonzero(0));
alert(nonzero(5));