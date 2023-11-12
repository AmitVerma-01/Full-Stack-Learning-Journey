// if 
const isUserLoggedIn = true

if (isUserLoggedIn) {     // condition must be true to enter in the scope
    
}

3 != 2

// < , > , <= , >= , == , === , != , !==

// shortHand notation

const balance = 500

// if(balance > 100) console.log("true"),console.log("false");

if(balance > 100){
    console.log("Executed");
}

const isLoggedIn = true 
const loggedFromEmail = true 
const loggedFromGmail = false 

if ( isLoggedIn && loggedFromEmail){
    console.log(" loggedIn with Email");
}

if(loggedFromEmail || loggedFromGmail ){
    console.log("logged IN");
}