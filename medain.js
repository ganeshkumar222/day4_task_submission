// annonymous
var medain = function(a,b)
{
    var c = a.concat(b)
for(var i =0;i<c.length;i++)
{
    for(j=0;j<c.length;j++)
    {
         if(c[i]<c[j]){
        var temp = c[i];
        c[i] = c[j]
        c[j] = temp
    }
    }
}
if(c.length%2===0)
{
   var d = (c[c.length/2]+c[c.length/2-1])/2
   return d
}
else
{
   return (c[Math.floor(c.length/2)])
}

}
console.log(medain([1,12,15,26,38,39],[13,19,30,45,2]));
// IIFE
(function(a1,b1){
    var c1 = a1.concat(b1)
for(var i =0;i<c1.length;i++)
{
    for(j=0;j<c1.length;j++)
    {
         if(c1[i]<c1[j]){
        var temp1 = c1[i];
        c1[i] = c1[j]
        c1[j] = temp1
    }
    }
}
if(c1.length%2===0)
{
   var d1 = (c1[c1.length/2]+c1[c1.length/2-1])/2
   console.log (d1)
}
else
{
   console.log(c1[Math.floor(c1.length/2)])
}


})([1,12,15,26,38,39],[13,18,30,45,2])
