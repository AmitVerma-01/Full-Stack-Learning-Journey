/* *******************************************       Number conversion       *********************************************** */

let stName="232"
// console.log(typeof stName);

let stNameToNumber=Number(stName)
// console.log(stNameToNumber);
// console.log(typeof stNameToNumber);


// "33" => 33
// "33abc" => NaN
// true = 1; false = 0;


/* *******************************************       Boolean conversion       *********************************************** */

let isLoggedIn=" "
// console.log(typeof(Boolean(isLoggedIn)));
// console.log(Boolean(isLoggedIn));


// "" => false
// "sdjsd"/"  " => true
// 1 => true; 0 => false

/* *******************************************       String conversion       *********************************************** */
let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


/* *******************************************       ##Operators##       *********************************************** */

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(4*2);
// console.log(4/2);
// console.log(5%2);
// console.log(5**2);  // 5^2

let str1 = "Amit"
let str2 = " Verma"

console.log(str1+str2);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2"); 

console.log((3 + 4 )* (5 % 3)); // use paranthesis not use tricky behaviour

console.log(+true);
console.log(+"");

// console.log();


console.log(value++);
console.log(++value);