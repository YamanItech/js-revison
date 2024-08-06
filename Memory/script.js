// ## Memory in js
// 1. Stack(store primative data)

// let name="Ishwor"
// let dupliName=name;
// console.log(dupliName);// Ishwor
// dupliName="yaman";
// console.log(name);// Ishwor
// console.log(dupliName);// yaman
// 2. heap (store Non-primetive data)
conclusion:
when dupliName =name ( it doesn't give it's value , instead give copy while storing in heap memory )
let emp1={
    name:"Ishwor",
    age:22
}
let emp2=emp1;
// before
console.log(emp2.age)//22
console.log(emp1.age)//22
emp2.age=28;
//after
console.log(emp2.age)//28
console.log(emp1.age)//28