// # Datatypes conversion confusion
/* 
let score ="33"
console.log(typeof score);
let valueInteger=Number(score);
console.log(typeof valueInteger);
*/

/*
let score="22abc"
console.log(typeof score);//string
let valueInteger=Number(score);
console.log(typeof valueInteger);//number 
console.log(valueInteger);//NaN

*/
/*
let a=true;
console.log(typeof a);//boolean
let number=Number(a);
console.log(typeof number);//number
console.log(number);//1
*/

//conclusion
/*
"33"=>33
"33abc"=>NaN
true=>1
false=>0

*/
/*
let a=0;
let boolean=Boolean(a);
console.log(typeof boolean);//boolean;
console.log(boolean);//false

*/
/*
let a="";
let boolean=Boolean(a);
console.log(typeof boolean);//boolean;
console.log(boolean);//false
*/

/*
let a="ishowr";
let boolean=Boolean(a);
console.log(typeof boolean);//boolean;
console.log(boolean);//true

*/

//conclusion
/*
1=>true;0=>false
""=>false;
"ishwor"=>true;
*/