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
//  let array=new Array(1,2,3,4,5);
// array.push(6);// adding new value of after last index
// array.push(7);
// array.pop();// remove the last value of array
// array.unshift(2);//add new value at first index
// array.shift();//remove the first element from the array
// console.log(array.includes(0));// check whether the element is included in the array  => element not fount returns -1
// console.log(array.indexOf(2));// Returns the index of the the element if present => element not fount returns -1
// console.log(array)
// ## slice,splice
//  console.log("original array",array);
//  let slice=array.slice(1,3);// return array from index 2 to 3 ;
//  console.log(" slice ",slice);
//  console.log("original array",array);
//  let splice=array.splice(1,3); //return array from index 1 to 3 ; // add also deletes the values of that index in original array
//  console.log("splice ",splice);
//  console.log("final original array ",array);
// ## sort,reverse,join,concat
/*
let array=["Ishowr","Kishwor","Amm"];
console.log(array.sort());// sort Aa-Zz
console.log(array.reverse());//sort Zz-Aa
console.log(array.join('_'));
console.log(array.concat("hello"));
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// # High Order Array Methods
// 1. filter
/*
const num=[1,2,3,4,5,6,7,8];
let filterNum=num.filter((num)=>(num>3));
console.log(filterNum);//[ 4, 5, 6, 7, 8 ]
filterNum=num.filter((num)=>{
    return num>3 && num!=5
})
console.log(filterNum)
*/

// 2. Map
/*
const num=[1,2,3,4,5,6,7,8];
const filterNum=num.map((num)=>num+2) ;
console.log(filterNum);//[3, 4, 5,  6 ,7, 8, 9, 10]
*/
// 3.Reduce
const a=[1,2,3,4];
const total=a.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue;
},0);
console.log(total);
// chaining 
/*
const num=[1,2,3,4,5,6,7,8];
const filterNum=num
          .map((num)=>num+2)
          .filter((num)=> num>=10)
console.log(filterNum);//[10]

*/