const x1 = "Nao muda";
let x2 = "variavel";
//x1 = "outro valor"; //vai dar erro
x2 = "outro valor"; // vai funcionar

let tipo1 = "string"
let tipo2 = 30.10
let tipo3 = true
console.log("Tipo", typeof(tipo1));
console.log("Tipo", typeof(tipo2));
console.log("Tipo", typeof(tipo3));

let tipoObject1 = new Object();
tipoObject1.nome = "Objeto 1";
tipoObject1.idade = 3;
console.log("Objeto", tipoObject1);

let tipoObject2 = {};
tipoObject2.nome = "Objeto 2";
tipoObject2.idade = 5;
console.log("Objeto", tipoObject2);

let tipoObject3 = {
    nome: "Objeto 3",
    idade: 8
};