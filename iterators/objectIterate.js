const myObject={
    js : "javaScript",
    cp : "comptetive programming",
    wd : "web dev"
}

for (const key in myObject) {
    // console.log(`${key} :- ${myObject[key]}`);
}

const program = ["js","cpp","ruby","py"]

for (const key in program) {
//    console.log(program[key]);
}

const map = new Map();
map.set("in","india") 
map.set("uk","united kingdom") 
map.set("fr","france") 

for (const key in map) {
    // console.log(map[key]);
}

