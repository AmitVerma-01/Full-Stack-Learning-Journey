let arr = [ 1, 2, 3 , 4 , 5 ]
console.log(arr);
// const newNum = arr.map( (num) => num+10 )
// arr=newNum
// console.log(arr);

// const newNum = arr
//                 .map( (num) => num*10 )
//                 .map( (num) => num+1 )
//                 .filter( (num) => num>20 )

// console.log(newNum);

// const myNum = arr.reduce( (sum , curVal ) => (sum + curVal),0);

// const total = arr.reduce( function(acc ,curVal){
//     console.log(`acc : ${acc}  and  curVal ${curVal}`);
//     return acc+curVal;
// },0)

// console.log(total);

const shoppingCart = [
    {
        item : "js course",
        price : 199
    },
    {
        item : "py course",
        price : 299
    },
    {
        item : "cpp course",
        price : 999
    },
    {
        item : "wev-dev course",
        price : 1999
    }
]

let totalPrice = shoppingCart.reduce(  (totalVal , courseVal) => (totalVal+courseVal.price),0 )

console.log(totalPrice);