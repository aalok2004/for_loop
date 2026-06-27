// Happy number

var number=15;
var sum=0;
    while(number>=10)
    {
        console.log("the actual number is ",number);
        for(var i=number;i>0;i=parseInt(i/10))
    {
        var digit =i%10;
        console.log("digits are: ",digit);
        var multi=1;
        for(var j=0;j<2;j++)
            {
                multi=multi*digit
                
            }
            sum= sum+multi;
           
           //console.log(multi);

              
    }
    //console.log("the sum of digit are:",sum); 
     if(sum==1)
            {
                console.log("The number is a happy number");
                break;
            }else{
                number=sum;
                sum=0;     
                 }   
                 console.log("number after calculation:",number) ;  
        }
 
                 
               //    console.log(sum);

        

    
    
               





