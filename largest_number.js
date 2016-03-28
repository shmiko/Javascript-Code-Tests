
function largestOfFour(arr) {
  // You can do this!
  var newArr = [];
  var retArray = [];
  for (var i = 0;i< arr.length;i++){
    newArr = arr[i];
    console.log('inside array is:', newArr);
    var sortedArray = [];
    for (var j = 0;j < newArr.length; j++){
      //console.log('newArr length should be 4: ',newArr.length);
      sortedArray.push(newArr[j]);
      console.log('inside array loop value is ',newArr[j]);
    }
    console.log('before sorting sortedArray is:',sortedArray)
    
    sortedArray.sort(function(a,b){
      console.log('index is ',[i],' sorting a-b:',a-b);
      return a-b;
    });
    console.log('after sorting sortedArray is:',sortedArray)
    retArray.push(sortedArray[sortedArray.length -1]);
    console.log('retrun array is:',retArray);
  
  }
  return retArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);


function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var newArray = [];
  if(howMany > arr.length){
    console.log('how many is more or zero arr:',arr,'howmany is:',howMany,'should return []',newArray);
    newArray = [];
    //console.log('how many is more newArray:',newArray);
  } else if (howMany <= arr.length && howMany > 0){
    console.log('how many is less and not zero arr:',arr,'howmany is:',howMany,'should return arr.slice(0,howMany)',arr.slice(howMany,arr.length));
    arr.slice(howMany,arr.length - howMany);
    newArray.push(arr);
    //console.log('how many is less newArray:',newArray);
  } else if (howMany == 0){
    newArray = arr;
    console.log('how many is less and not zero arr:',arr,'howmany is:',howMany,'should return arr.slice(0,howMany)',arr);
  }
  return newArray;
}
