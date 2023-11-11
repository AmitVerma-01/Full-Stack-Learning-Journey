let a= 10;
// const b= 20;
// var c= 30;
if(true){
    let a= 10.3;
    const b= 20;
    // var c= 30;
    // d=40
    // console.log("inner" , a);
}
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
function One(){
    const username = "Amit"
    function two(){
        const website = "YouTube"
        console.log(username);
    }
    // console.log(website);

    two();
}

One()

