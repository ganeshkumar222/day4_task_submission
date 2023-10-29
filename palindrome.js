// annonymous
var palin = function(arr){
    var output = []
    for(var i = 0;i<arr.length;i++){
        var j = arr[i].split("").reverse().join("")
        if(j===arr[i]){
            output.push(j)
        }
    }
    return output
}
console.log(palin(["malayalam","newspaper","radar"]));
// IFFE
(function(arr2){
    var output2 = []
    for(var i = 0;i<arr2.length;i++){
        var j = arr2[i].split("").reverse().join("")
        if(j===arr2[i]){
            output2.push(j)
        }
    }
    console.log(output2)

})(["malayalam","newspaper","radar"])
// arrow
var palin2 = function(arr3){
    var output3 = []
    for(var i = 0;i<arr3.length;i++){
        var j = arr3[i].split("").reverse().join("")
        if(j===arr3[i]){
            output3.push(j)
        }
    }
    return output3
}
console.log(palin2(["malayalam","newspaper","radar"]));
