// falsy value

// false , 0 ,-0 , BigInt 0n, "" , null ,undefined , NaN

// truthy value
// "0" , "false" , " " , [] , {} , function(){} ,

const empty= {}

if(Object.keys(empty).length===0){
    console.log("Object is empty");
}

const arr= []
if(arr.length === 0){
    console.log("Array is empty");
}

// Nullish coalescing Operator (??) :  null , undefined

let val;
val = null ?? 10;
val2= undefined ?? 4;
val3= 4 ?? 5;
val4= null ?? 5 ?? 10;

console.log(val);
// console.log("val1");
console.log(val2);
console.log(val3);
console.log(val4);

// terniary operator
// condition ? true : false

