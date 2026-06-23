//armstrong number
var n = 153;
var count = 0;
var sum=0;
for(var i=n;i>0;i=parseInt(i/10)){
count=count+1
}

console.log(count)
//  for(var j=n;j>0;j=parseInt(j/10)){
// var digit =j%10;
// console.log(digit);
var multi =1;
 for(var k=0;k<count;k++){  //isme mujhe ye loop lagate nahi aa raha tha
multi=multi*digit
 }
//  sum=sum+multi;
//  //console.log(multi);
// }
//console.log(sum);