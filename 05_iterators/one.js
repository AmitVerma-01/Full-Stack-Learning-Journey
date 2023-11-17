// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// } 

// while (condition) {
    
// }


// do {
    
// } while (condition);

//   Array related loops

// for of loop 

const arr1=[1,2,3,4,5,6,7]

for (const num of arr1) {
    // console.log(num);
}

const greeting =" hello World"
for (const greet of greeting) {
// console.log(greet);
    
}

const map = new Map();
map.set("in","india") 
map.set("uk","united kingdom") 
map.set("fr","france") 

console.log(map);
console.log();
for (const [key, item] of map) {
    console.log(`${key} :- ${item}`);
    
}

// const  myObject = {
//     "g1" : "spiderman",
//     "g2" : "batman"
// }

// for (const [it,gt] of myObject) {
//     console.log(it,gt);
    
// }