//Print odds 1-20
for(var i=1; i<=20; i++){
    if(i % 2 === 1){
        console.log(i);
    }
}
//Output: 1,3,5,7,9,11,13,15,17,19

//Sum and Print 1-5
var sum=0;
for(var i=1; i<=5; i++){
    sum += i;
    console.log("Num: ",i,", Sum: ",sum);
}
/*Output:
Num: 1, Sum: 1
Num: 2, Sum: 3
Num: 3, Sum: 6 
Num: 4, Sum: 10
Num: 5, Sum: 15
*/