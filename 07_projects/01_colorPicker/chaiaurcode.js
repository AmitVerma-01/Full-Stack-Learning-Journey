const buttons = document.querySelectorAll(".button");
// console.log(buttons)
const body = document.body;

buttons.forEach( (btn)=>{
    // console.log(btn);
    // console.log(btn);
    btn.addEventListener('click' ,(e)=>{
        // console.log(e);
        // console.log(e.target.id);
        // if(e.target.id === 'white'){
        //     body.style.backgroundColor=e.target.id
        // }
        // if(e.target.id === 'yellow'){
        //     body.style.backgroundColor=e.target.id
        // }
        // if(e.target.id === 'blue'){
        //     body.style.backgroundColor=e.target.id
        // }
        // if(e.target.id === 'grey'){
        //     body.style.backgroundColor=e.target.id
        // }
        
        // if(e.target.id === 'green'){
        //     body.style.backgroundColor=e.target.id
        // }
        switch (e.target.id) {
            case e.target.id:
                body.style.backgroundColor=e.target.id;
                break;
        
            // default:
            //     break;
        }
    } )
} )