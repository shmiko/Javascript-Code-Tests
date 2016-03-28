function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var falsyArray = ['false','null','0',"",'undefined','NaN'];
  var newArr = [];
  var tempStr;
  var arrStr;
  var index;
  //function isFasly(value) {
  for (var j = 0;j < arr.length;j++){
    arrStr = arr[j];
    if (arrStr === null){
      arrStr = 'null';
    }
    for (var i = 0;i < falsyArray.length;i++ ){
      tempStr = falsyArray[i];
      console.log('match arrStr',arr[j],'vs tempStr',tempStr);
      //console.log('arr is:',arr,'tempStr is:',tempStr,'tf:',arr[j].indexOf(tempStr));
       if (arr[j] == tempStr){
         //console.log('before pop:',newArr);
         //newArr.push(tempStr);
        arr.splice(tempStr, 1);
        console.log('after pop arr[j] === tempStr:',arr[j] == tempStr);
        console.log('ret:',arr);
       }
    }
  }
    
    
  //}
  console.log('ret:',arr);
  return arr;
}

bouncer([7, "ate", "", false, 9]);