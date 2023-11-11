// Immediately Invoked Function Expression (IIFE)

// function chai(){
//     console.log("DB Connected");
// }
// chai ()

(function chai(){
    console.log("DB Connected IIFE");
})(); 

// use ";" for multiple IIFE to end the function 

( ()=> {
    console.log("IIFE for arrow function");
})();

( (name)=> {
    console.log(`IIFE for arrow function, ${name}`);
})("Amit");