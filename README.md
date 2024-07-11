# JavaScript Data Types and Variables

This document provides an overview of the different data types in JavaScript and demonstrates how to work with them.

```javascript
console.log("hello world");

// Data Types and Variables
var names = "ishwor acharya";
console.log(names);

// JavaScript Data Types
// There are two types of data types in JavaScript: 
// 1. Primitive 
// 2. Non-primitive

// 1) Primitive Data Types
// String, Number, BigInt, Boolean, Null, Undefined, and Symbol

// Integer
let a = 1;
console.log(typeof(a)); // Output: number

// String
let a = "ishwor";
console.log(typeof(a)); // Output: string

// Boolean
let a = true;
console.log(typeof(a)); // Output: boolean

// Undefined
let a;
console.log(typeof(a)); // Output: undefined

// Null (In JavaScript, null represents "nothing", but its datatype is an object)
let a = null;
console.log(typeof(a)); // Output: object

// Symbol (It means unique, even if the datatypes and the values are the same, if used symbol it differs from each other)
let a, b;
a = "ishwor";
b = Symbol("ishwor");
console.log(a == b); // Output: false

// BigInt (Prints more digits than an integer => 16 digits)
let a = BigInt(1);
console.log(a); // Output: 1n

// 2) Non-primitive Data Types
// Objects, Arrays, and Functions



// Example of an Object
let person = {
    firstName: "Ishwor",
    lastName: "Acharya",
    age: 30
};
console.log(typeof(person)); // Output: object

// Example of an Array
let numbers = [1, 2, 3, 4, 5];
console.log(typeof(numbers)); // Output: object

// Example of a Function
function greet() {
    console.log("Hello, world!");
}
console.log(typeof(greet)); // Output: function


```
## Difference between Object and Array
### Object 
  1. Key value paires
   ```javascript
    let a={
        "key":"value",
        "key":"value",
        "key":"value"
    }
   ```
   2. Can hold different datatypes
   3. syntax ={}
### Array
1. Ordered collections of values
2. syntax =[]