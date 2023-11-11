// const tinderUser = new Object();

const tinderUser ={}
tinderUser.id = "123abc"
tinderUser.name="Aman"
tinderUser.age= 18

// console.log(tinderUser);

const ragUser = {
    email : "some@someone.com",
    fullName : {
        userFullName :{
            firstName : "Amit",
            lastName: "Verma"
        }
    }
}

// console.log(ragUser.fullName?.userFullName.firstName)

const ob1 ={
    1 : "a ",
    2: "b"
}
const ob2 = {
    3 : "c", 
    4 : "d"
}

// const ob3 = {ob1, ob2}
const obj3 = {...ob1,...ob2}
const ob3 = Object.assign({},ob1,ob2) 
// console.log(ob3);
// console.log(obj3)

const users =[
   { id : 1,
    email : "amit@gmail.com"
   },
    {
    id: 2 ,
    email : "2@gmail.com"
   }
]
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
 
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('fullname'));