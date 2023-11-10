const initialzating = [1,2,2,3,5,6,"Amit" , true]

const myArray = [1,2,3,4,5,6];
console.log(myArray);
console.log(typeof myArray);

myArray.push(8)
myArray.push(9)
console.log(myArray);

myArray.pop()
console.log(myArray);

myArray.unshift(10)
console.log(myArray);

myArray.shift();
console.log(myArray);

console.log(myArray.includes(5));

console.log(myArray.indexOf(5));

let newArr = myArray.join();
console.log(newArr);
console.log(typeof newArr);

console.log("A " , myArray);
console.log(" slice " , myArray.slice(1,4)); // slice not includes last index and does not modified array

console.log("B ", myArray);
console.log("Splice " , myArray.splice(1,3)); // splice cut the portion of an array and modified array 


console.log("C ", myArray);

