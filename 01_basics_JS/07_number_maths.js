const score = 100

console.log(score);

const balance = new Number(400)
console.log(balance);

console.log(balance.toString().length);
let val=1223.215135

console.log(val.toFixed(1));

let otherNumber = 154
console.log(otherNumber.toPrecision(5));

const hundreds= 1000000000
console.log(hundreds.toLocaleString());

/* *********************************************************   maths  ********************************************** */

console.log(Math);

console.log(Math.abs(-5));
console.log(Math.round(4.44));
console.log(Math.ceil(4.23));
console.log(Math.floor(40.845));

console.log(Math.pow(4,2));

console.log(Math.round(Math.random()*5) + 1);

const min=10
const max=20

console.log(Math.floor(Math.random() * (max - min + 1) + min ));