// var n=1;
// var count =0;
// for(var i=2;i<n;i++){
//      if(n%i==0){
//         count++;
//      }
// }
// if(count==0){
//     console.log("prime")
// }else{
//      console.log("not prime")
// }


var n=100;
for(var j=2;j<=n;j++){
var count =0;

for(var i=2;i<j;i++){
     if(j%i==0){
        count++;
     }

}
if(count==0){
    console.log(j)
}

}