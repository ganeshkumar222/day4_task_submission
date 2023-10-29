// annonymous function
var caps = function(arr)
{
    var output= []
    for(var i =0;i<arr.length;i++)
    {
        var lower = arr[i].toLowerCase()
        var p = lower.split(" ")
        for(var j = 0;j<p.length;j++)
        {
            p[j]=p[j].charAt(0).toUpperCase()+p[j].slice(1)
            
        }
        output.push(p.join(" "))
    
    }
    return output
}
console.log(caps(["ganesh kumar","gk p","indian cricket team"]));
// IFFE
(function(arr1){
    var output1= []
    for(var i =0;i<arr1.length;i++)
    {
        var lower1 = arr1[i].toLowerCase()
        var p1 = lower1.split(" ")
        for(var j = 0;j<p1.length;j++)
        {
            p1[j]=p1[j].charAt(0).toUpperCase()+p1[j].slice(1)
            
        }
        output1.push(p1.join(" "))
    
    }
    console.log(output1)

})(["ganesh kumar","gk p","indian cricket team"])
// arrow

var caps2 = (arr3) =>{
    var output3= []
    for(var i =0;i<arr3.length;i++)
    {
        var lower3 = arr3[i].toLowerCase()
        var p3 = lower3.split(" ")
        for(var j = 0;j<p3.length;j++)
        {
            p3[j]=p3[j].charAt(0).toUpperCase()+p3[j].slice(1)
            
        }
        output3.push(p3.join(" "))
    
    }
    return output3
}
console.log(caps2(["ganesh kumar","gk p","indian cricket team"]));