//loops
// 1. for loop
//syntax
/*
for (initialization; condition; afterthought){
    statement
}
 
*/
//example
/*
 let b=0;


for(let a=1;a<=10;a++){
    console.log("hello i am loop");
    b++;

}
console.log(b);
*/

// 2. While loop
//example
/*
let b=0;
while(b<10){
    console.log("while loop ")
}
    */

// 3. do while loop 
//example
/*
let c=0;
 do{
    console.log(c);
    c++;
 }while(c<10)
 */
//extra concept 
 // * for of 
 /*
 let a=['a','b','c']
 for (let b of a){
    console.log(b);// prints the value of the array(1 by 1)
 }
    */

 // *for in 
 /*
 let a=['a','b','c']
 for (let b in a){
    console.log(b);// prints the index of the array(1 by 1)
 }
    */
// *continue 
/*
for (let a=0;a<5;a++){
    if(a==3){
        console.log("Loop is at 3 ");
        continue;//only stops the current iteration of the loop
    }
    console.log("loop no:",a)
}
    */

 //result 
 /*
 loop no: 0
loop no: 1
loop no: 2
Loop is at 3
loop no: 4
*/
// *break 
/*
for (let a=0;a<5;a++){
    if(a==3){
        console.log("Loop is at 3 ");
        break;//stops the entire process of the loop.
    }
    console.log("loop no:",a)
}
    */

 //result 
 /*
 loop no: 0
loop no: 1
loop no: 2
Loop is at 3
*/

