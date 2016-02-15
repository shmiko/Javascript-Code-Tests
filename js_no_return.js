function count(){
  var res = [];
  for (var x = 0; true; x++) {
    res.push(x);
  }
  return res;
}
for (var x of count()) {
  console.log("x is ", x);
}
