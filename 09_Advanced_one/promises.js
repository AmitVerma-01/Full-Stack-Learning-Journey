// const promiseOne = new Promise(function(resolve , reject){
//     // do an async task
//     // 1 DB call  , cryptography, network call

//     setTimeout(function(){
//         console.log("Hello, Your Async task is complete");
//         resolve()
//     },2000)

// });

// promiseOne.then(()=>{
//     console.log("promise comsumed");
// })

// new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("asynce task two 2");
//         resolve()
//     },2000)
// }).then(()=>{
//     console.log("Async 2 complete");
// })

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ userName: "chai", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "Amit", pas: "12345" });
    } else {
      reject("ERROR : something went wrong");
    }
  }, 2000);
});

// let us = promiseFour.then((user)=>{
//     console.log(user);
//     return user.userName;
// })
// console.log(us);

let us = promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((usname) => {
    console.log(usname);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise either resolved or rejected");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "JavaScript", pas: "12345" });
    } else {
      reject("ERROR : JS went wrong");
    }
  }, 2000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();
