// annonymous
var sum = function(arr){
    var total = 0;
    for(var i=0;i<arr.length;i++){
        total+=arr[i]
    }
    return total
}
console.log(sum([1,2,3,4,5]));

// IIFE

(function(arr1){
    var total1 = 0;
    for(var i=0;i<arr1.length;i++){
        total1+=arr1[i]
    }
    console.log(total1)

})([1,2,3,4,5])

// Arrow
var sum3 = (arr3) => {
    var total3 = 0;
    for(var i=0;i<arr3.length;i++){
        total3+=arr3[i]
    }
    return total3
}
console.log(sum3([1,2,3,4,5]));
