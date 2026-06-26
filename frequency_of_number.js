var n= 78783434;
var digit=0;
var x=4;
var count=0;
for(var i=n;i>0;i=parseInt(i/10))
    {
        digit=i%10;
        if(x==digit)
            {
                count++;
            }
    }
    console.log(count);