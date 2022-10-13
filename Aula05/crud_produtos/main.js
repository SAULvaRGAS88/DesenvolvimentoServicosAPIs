//Main
let cadastroProdutos = require('./cadastro_produtos')


let prod4 = {
    nome:"Produto 4", 
    preco:40
}

cadastroProdutos.inserir(prod4)

let prod5 = {
    nome:"Produto 5", 
    preco:50
}

cadastroProdutos.inserir(prod5)


console.log("Listar",cadastroProdutos.listar())

try {
    console.log("Buscar Por ID=2", cadastroProdutos.buscarPorId(2))
} catch(err) { 
    console.log("Erro", err);
} 
try {
    console.log("Buscar Por ID=4", cadastroProdutos.buscarPorId(4))
} catch(err) { 
    console.log("Erro", err);
} 
try {
    console.log("Buscar Por ID=6", cadastroProdutos.buscarPorId(6))
} catch(err) { 
    console.log("Erro", err);
} 

cadastroProdutos.atualizar(1, { preco: 11 })

cadastroProdutos.deletar(6)

console.log("Listar",cadastroProdutos.listar())