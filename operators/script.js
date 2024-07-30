//Operators
/*
The Assignment Operator = assigns values

The Addition Operator + adds values

The Multiplication Operator * multiplies values

The Comparison Operator > compares values
*/


// 1. Arithemetic Operators
/*
let a,b;
a=2;
b=3;
console.log(a+b);//5
console.log(a-b);//-1
console.log(a*b);//6
console.log(a/b);//0.6666666666666666
console.log(a%b);//2
console.log(a++);//2
console.log(++a);//3
console.log(a--);//3
console.log(a);//2
console.log(--a);//1
console.log(a**a);//1*1=1

*/
//2. Assignment Operators =,+=,-=
/*
let a,b;
a=3,b=4;
console.log(a+=a);// a=a+a;
console.log(a-=a);//a=a-a;
*/
// 3. Comparision Operators == , ===, >, <, 
/*
let a,b,c;
a=2,b=3,c="2";
console.log(a==b);//false 
console.log(a===c);//false ( also checks the datatype)
console.log(a<b);//true;

*/
// 4. Logical Operators  (&& || ! )
/*
let z=true;
let x=false;
console.log(z && z);//true 
console.log(z && x);//false
console.log(z || x);//true
console.log(!z);//false
console.log(!x);//true
*/

//5. Ternary Operators
/*
console.log((2>1)?'it is true':'its false');
// is 2 greater than 1  ? if true return true  else return false
*/
//6. Conditional Operators ( if else elseif switch)

// if else else if 
 //syntax
 /*
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
  */
/*
if(2<1){
    console.log("true");
}
else if(2==='2'){
  console.log("same")
}
else{
    console.log("false");
}
*/

//switch 
//syntax
/*
switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }
      */

/*
let c=9;
switch(c)
{
    case 1:console.log("hello is sunday");
    break;
    case 2:console.log("hello is monday");
    break;
    case 3:console.log("hello is tuesday");
    break;
    default:console.log("error");
}
    */
