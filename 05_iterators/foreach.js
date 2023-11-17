const coding=["js","cpp","py","numpy"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach((item)=>{
//     console.log(item);
// }),

// coding.forEach((item , index , arr)=>{
//     console.log(item , index , arr);
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)

const arrObj=[
    {
        languageName : "javaScript",
        languageType : "Script"
    },
    {
        languageName : "cpp",
        languageType : "Programming"
    },
    {
        languageName : "ruby",
        languageType : "coding"
    }
]

arrObj.forEach((item)=>{
    console.log(item.languageType);
})