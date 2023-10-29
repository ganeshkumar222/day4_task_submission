// annonnymous
var duplicate = function(arr){
    var output = [...new Set(arr)]
    return output
}
console.log(duplicate([1,3,2,2,2,5,6,7,81,2,3,1]));
// IFFE
(function(arr1){
    var output1 = [...new Set(arr1)]
    console.log(output1)

})([1,3,2,2,2,5,6,7,81,2,3,1])