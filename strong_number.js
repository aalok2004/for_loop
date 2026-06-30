

//17. strong 
var n = 145;
var sum = 0;
for(var i=n;i>0;i=parseInt(i/10)){
var digit =i%10;
var fact= 1;      // or isme me ye variable ko upper hi initilaize kar raha tha
for(var j=1;j<=digit;j++){
fact=fact*j;
console.log(fact);
}
sum=sum+fact;
}
//console.log(sum)
if(n==sum){
console.log(n);
}else{
    console.log("this is not a strong number ")
}


