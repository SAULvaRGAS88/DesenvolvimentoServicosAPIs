// Produto -> id, nome, preco
// {id:1, nome:"Produto1", preco:10}

let listaProdutos = [
    {id:1, nome:"Produto 1", preco:10},
    {id:2, nome:"Produto 2", preco:20},
    {id:3, nome:"Produto 3", preco:30},
]
let idGerado = 3

function geradorId() {
    
    return ++idGerado
}

function inserir(produto) {
    produto.id = geradorId()
    listaProdutos.push(produto)
}

function listar(){
    return listaProdutos
}

function buscarPorId(id) {
    for(let produto of listaProdutos){
        if(produto.id == id) {
            return produto
        }
    }
    console.log("Erro", "ID nao encontrado");
}

function atualizar(id, produtoAlterado) {
    for(let produto of listaProdutos){
        if(produto.id == id) {
            if(produtoAlterado.nome) {
                produto.nome = produtoAlterado.nome
            }
            if(produtoAlterado.preco) {
                produto.preco = produtoAlterado.preco
            }
        }
    }
}

function deletar(id) {
    for(let i in listaProdutos) {
        if(listaProdutos[i].id == id) {
            listaProdutos.splice(i, 1);
        }
    }
    
}

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

console.log("Buscar Por ID=2", cadastroProdutos.buscarPorId(2))
console.log("Buscar Por ID=4", cadastroProdutos.buscarPorId(4))
console.log("Buscar Por ID=6", cadastroProdutos.buscarPorId(6))

atualizar(1, { preco: 11 })

deletar(6)

console.log("Listar",cadastroProdutos.listar())


