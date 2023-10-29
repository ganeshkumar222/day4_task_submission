// annonymous
var prime = function (arr){
    var output = []
    for(var i = 0;i<arr.length;i++){
      var flag = true
        for(var j =2;j<arr[i];j++){
            if(arr[i]%j===0){
                flag = false
            }
        }
        if(flag===true){
            output.push(arr[i])
        }
    }
    return output
}
console.log(prime([5, 9, 63, 29, 35, 6, 55, 23]));

// IFFE
(function(arr2){
    var output2 = []
    for(var i = 0;i<arr2.length;i++){
      var flag2 = true
        for(var j =2;j<arr2[i];j++){
            if(arr2[i]%j===0){
                flag2 = false
            }
        }
        if(flag2===true){
            output2.push(arr2[i])
        }
    }
    console.log(output2)
})([5, 9, 63, 29, 35, 6, 55, 23])

// arrow
var prime3 = function (arr3){
    var output3 = []
    for(var i = 0;i<arr3.length;i++)
    {
      var flag3 = true
        for(var j =2;j<arr3[i];j++)
        {
            if(arr3[i]%j===0)
            {
                flag3 = false
            }
        }
        if(flag3===true)
        {
            output3.push(arr3[i])
        }
    }
    return output3
}
console.log(prime3([5, 9, 63, 29, 35, 6, 55, 23]));