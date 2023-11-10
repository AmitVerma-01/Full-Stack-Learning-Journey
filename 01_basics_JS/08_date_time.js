let myDate = new Date();
console.log(myDate.toTimeString())
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate)

let myCreatedate = new Date(2023, 0 , 6);
let myCreatedate2 = new Date(2023, 0 , 6, 5 , 30);
console.log(myCreatedate2.toLocaleString())

let newDate= new Date("2003-12-22"); //YYYY/MM/DD
console.log(newDate.toDateString());

let darDate= new Date("01-01-2004") //must be in  MM/DD/YYYY formate
console.log(darDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date("02-12-2002 05:10:26")
console.log(newDate.toDateString()); 
console.log((newDate.getDay()));
console.log((newDate.getTime()));
let time = (newDate.getTime());
console.log(new Date(time).toString());
console.log((newDate.getHours()));
// console.log((newDate.getMinutes()));
// console.log((newDate.getSeconds()));

console.log(new Date(1013470826000).toUTCString());