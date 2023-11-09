const name ="amit"
const surname="verma" 
const repoCount = 50

// console.log(name + " " + surname + " " + repoCount);

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`); 

const Name = new String("Amit Verma")

// console.log(Name);

// console.log(Name[0]);

// protocols accessing

// console.log(Name.__proto__)

// console.log(Name.length);

// console.log(Name.charAt(3));

// console.log(Name.toUpperCase());

// console.log(name.indexOf('a'));

const sbName = Name.substring(0,3);

// console.log(sbName);

let assumeName = Name.slice(-8 , 4)

console.log(assumeName);

const url = "https://www.amitverma.com/amit%20verma%20about"

console.log(url.replace('%20', '-'));
console.log(url.replaceAll('%20', '-'));

console.log(Name.includes('Amit  '));

const newstr= "       amit     "

console.log(newstr.trim());
