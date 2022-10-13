const fs = require("fs").promises;

async function escreveArquivo(){
    console.log("1:", "Hello");
    await fs.writeFile("teste.txt", "Hello")

    console.log("2:", "Hello");
    await fs.writeFile("teste1.txt", "Hello")

    console.log("3:", "Hello");
}

escreveArquivo()