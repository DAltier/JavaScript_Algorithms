var testArr = [6,3,5,1,2,4]
//Challenge 1: Print Values and Sum
var sum=0;
for(var i=0; i<testArr.length; i++){
    sum += testArr[i];
    console.log("Num: ",testArr[i],", Sum: ",sum);
}
/*Output:
Num 6, Sum 6
Num 3, Sum 9
Num 5, Sum 14
Num 1, Sum 15
Num 2, Sum 17
Num 4, Sum 21
*/

//Challenge 2: Value * Position
var newArray = [];
for(var i=0; i<testArr.length; i++){
    newArray.push(testArr[i] * i);
}
console.log(newArray);
//Output: [0,3,10,3,8,20]