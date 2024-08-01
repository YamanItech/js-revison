// # Array

//different way of writing array
// 1.
/*
let array=['a','e','i','o','u'];
*/
// 2.
/*
let a=new Array('a','e','i','o','u');

for(let i in array){
    console.log(i);
    
}
    */

// ## array methods
 let array=new Array(1,2,3,4,5);
// array.push(6);// adding new value of after last index
// array.push(7);
// array.pop();// remove the last value of array
// array.unshift(2);//add new value at first index
// array.shift();//remove the first element from the array
// console.log(array.includes(0));// check whether the element is included in the array  => element not fount returns -1
// console.log(array.indexOf(2));// Returns the index of the the element if present => element not fount returns -1
// console.log(array)
// ## slice,splice
 console.log("original array",array);
 let slice=array.slice(1,3);// return array from index 2 to 3 ;
 console.log(" slice ",slice);
 console.log("original array",array);
 let splice=array.splice(1,3); //return array from index 1 to 3 ; // add also deletes the values of that index in original array
 console.log("splice ",splice);
 console.log("final original array ",array);



