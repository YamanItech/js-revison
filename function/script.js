//function
//syntax
/*
function name(parameter1, parameter2, parameter3) {
    // code to be executed
  }
*/
//Example1

/*function hello(){//function declaration 
    console.log("welcome");
}
hello();//function calling 
*/
//Example2
/*
function sum(a,b){// a,b is parameter of the funciton 
    console.log("The sum is :",a+b);

}
sum(2,3); // 2,3 is argument of the function    
*/


// arrow function 
// example1
/*
let a=()=>{
    console.log("hello");
}
a();
*/
//example2
/*
let b=(num1,num2)=>{
console.log("sum is :",num1+num2);
}
b(2,3);
*/
//example3
/*
let c=(a,b)=>a*b;
console.log(c(1,3));
*/

// # High order function (foreach)

let books=["Math","Nepali","English"]
books.forEach((book)=>{
 console.log(book);
})
