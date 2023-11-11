// singleton 
// singleton object is created using constructor

// objects literals
//initializing

const mySym = Symbol("myKey1")

const jsUser = {
    name : "Amit",
    "full name" : "Amit Verma",
    age : 19,
    [mySym] : "key.1",
    email : "Amitvermaup57@gmail.com",
    location : "Kushinagar",
    isLoggedIn : false,
    lastLoggedIn : ["Mon", "Tue", "Thu"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
// console.log(jsUser.full name); // not allow
console.log(jsUser["full name"]);

jsUser.email="amitverma@google.com"
// Object.freeze(jsUser);  // to freeze the change
jsUser.email="amitverma@gpt.com"
// console.log(jsUser);

// console.log(jsUser[mySym]);

jsUser.greeting = function(){
    console.log(`hello JS user`);
}

jsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greetingTwo());