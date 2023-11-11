// console.log("A");
// console.log("M");
// console.log("I");
// console.log("T");

function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("T");
}

// sayMyName();

// function addTwoNumber(num1,num2){
//     console.log(num1+num2)
// }

function addTwoNumber(num1,num2){
    return num1+num2;
}

const result = addTwoNumber(3,5)
// console.log(`result : ${result}`);

function logInUserMsg(userName = "user1"){
    if(!userName){
        console.log("pls enter userName");
        return;
    }
    return `${userName} just loggedIN ,welcome back`
}

// let str=logInUserMsg("Amit")

// console.log(str);

// console.log(logInUserMsg("Amit"));

function addCartValue(val1,...num1){
    return num1;
}
// console.log(addCartValue(2));
console.log(addCartValue(200,400,55));

const user ={
    name : "Amit",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.name} and the price is ${anyObject.price}`);
}
handleObject(user)

const newValueArr = [10,20,30,40]
function returnSecondValue(getArr){
    console.log(getArr[1]);
}
returnSecondValue(newValueArr)