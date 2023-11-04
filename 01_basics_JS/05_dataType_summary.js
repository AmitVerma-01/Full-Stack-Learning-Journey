// primitive data type

// 7 types : string , Number , Boolean , null , undefined , bigInt, symbol

const score= 12313
const scoreValue = 100.3

let isLoggedIn = true ;

let temp=null

const id= Symbol('123')
const idNew= Symbol('123')
// make unique
console.log(id===idNew);

// Non Primitive
// reference type data types
// Array , Object, Function 

const hero=["nagaraj", "shaktiman", "doga"]

const myObj={
    name:"Amit-Verma",
    university: "BBD University",
    age:  19,
}
// console.log(myObj.name);

/* 
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  function
       Function  => object function
       Object  =>  function
*/


/* ********************************************** stack and heap memory ******************************************************* */

// stack ( primitive )
// heap ( non-primitive ) passed by reference 

let Name="Amit verma"
let anotherName=Name

// console.log(Name);
// console.log(anotherName);

anotherName="Annu"
console.log(Name);
console.log(anotherName);

let userOne={
    username : "amitvermup57",
    Email : "Amitverma12@gmail.com"

}

let userTwo = userOne

userTwo.Email="annu@gmail.com"

console.log(userOne);
console.log(userTwo);