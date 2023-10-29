// Q1-odd numbers in an array
// annonymous function
var a = function(arr)
{
    var odd = []
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!==0)
        {
            odd.push(arr[i])
        }
    }
    return odd
}
var b = [1,2,3,5,7]
console.log(a(b));
// IFFE
(function (a)  {
    var output = []
       for(var i=0;i<a.length;i++)
       {
           if(a[i]%2!==0)
           {
               output.push(a[i])
           }
       }
       console.log(output)  
 })([0,1,2,3,4,5,6,7,8,9]);
//  arrow
var arrow = (d) =>{
    var e = []
    for(var i=0;i<d.length;i++)
    {
        if(d[i]%2!==0)
        {
            e.push(d[i])
        }
    }
    return e

}
console.log(arrow([0,1,2,3,4,5,6,7,8,9]));