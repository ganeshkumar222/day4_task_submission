// annonymous
var shift = function(arr,k){
    for(var i =0;i<k;i++)
    {
    arr.unshift(arr.pop(arr.length-1))
    }
    return(arr)
}

console.log(shift([1,2,3,4,5],3));
// IFFE
(function(arr1,k1){
    for(var i =0;i<k1;i++)
    {
    arr1.unshift(arr1.pop(arr1.length-1))
    }
    console.log(arr1)

})([1,2,3,4,5],3)