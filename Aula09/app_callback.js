const fs = require("fs");

fs.writeFile("Teste.txt", "Hello World",(err) => {
    if(err){
        console.log(err);
    }
    console.log("1: ", "Hello");
})
console.log("2: ", "Hello");

fs.writeFile("Teste.txt", "Hello World",(err) => {
    if(err){
        console.log(err);
    }
    console.log("3: ", "Hello");
})