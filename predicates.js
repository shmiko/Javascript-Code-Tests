Array.prototype.all = function (p) {
  for(var i = 0, y = 0; i < p.length; i++) {
    if(this[i] > 0) { y++; }
    console.log('ALL this is ',this[i],' and y is ',y);
  }
  console.log('ALL p.length ',p.length);
  if(y == p.length) { 
    console.log('ALL T this is ',this,' and y is ',y);
    return true; 
  } 
  else { 
    console.log('ALL F this is ',this,' and y is ',y);
    return false; 
  }
};

Array.prototype.none = function (p) {
  m = 0;
 for(var i = 0, y = 0; i < p.length; i++) {
    if(this[i] < 0){
      y++;
      console.log('NONE this is ',this[i],' and y is less than ',y, ' and p.length is ',p.length);
    }
  }
  if(y != p.length) { 
    console.log('NONE T and y is ',y, ' and p.length is ',p.length);
    return true; 
 } else if(y == 0) {
   return true;
  } else{
    return false;
  }
};


Array.prototype.any = function (p) {
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
console.log(nonzero(-5));
console.log(nonzero(0));
console.log(nonzero(5));


function and(p1, p2) {
    return function(x) {
        return p1(x) && p2(x);
    }
}
function not(p) {
    return function(x) {
        return !p(x);
    }
}





