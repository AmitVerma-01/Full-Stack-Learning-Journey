const user = {
    // userName: "Amit",
    price : 199,
    welcomeMsg : function(){
        console.log(`${this.userName}, Welcome to website`);
        console.log(this);
    }
}
// user.welcomeMsg()
// user.userName="Sam"
// user.welcomeMsg()

// console.log(this);

// function chai(){
//     let userName= "hitesh"
//     console.log(this.userName);
// }
// chai()

// const chai = function (){
//     let userName= "hitesh"
//     console.log(this.userName);

// }

const chai = () => {
    userName = "Annu"
    console.log(this);
}

// chai();

// Arrow function 
// ()=> {}

// const addTwo = (num1 ,num2) => (num1+num2) //implicit return 
  

const  addTwo = () => ({user :"Amit"})
console.log(addTwo(4,3));