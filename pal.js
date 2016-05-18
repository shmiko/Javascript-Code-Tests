function longest_palindromic_substring(str) {
    var newForwardArr = [];
    var newBackwardArr = [];
    var str2 = str.split();
    var strLength = str.length;
    var reversedStr = str.split().reverse();
    for (var i = 0; i < str.length; i++){
        newForwardArr.push(str2[i]);   
        newBackwardArr.push(reversedStr[i]);

        if(newForwardArr == newBackwardArr && newBackwardArr.length >= 2){
            return newBackwardArr;
        }
    }
}

longest_palindromic_substring('bobcat');