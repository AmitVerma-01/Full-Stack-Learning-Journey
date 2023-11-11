const mcu_heros = ["ironman", "spiderman", "blackwidow"]
const dc_heros = ["aqua man", "super man" ] 

console.log(mcu_heros);
console.log(dc_heros);

mcu_heros.push(dc_heros);
let allHeros = mcu_heros.concat(dc_heros)
console.log(allHeros);


console.log(mcu_heros[3][0]);

const allNewHeros = [...mcu_heros , ...dc_heros]
console.log(allNewHeros);

const arr= [1, 3, 3 ,[ 1, 5 , 6 ,7],[9, 5 ,[5,6]]]

const rearArr = arr.flat(Infinity)
console.log(rearArr);

console.log(Array.isArray("Amit verma"));
console.log(Array.from("Amit verma")); // convert into Array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



