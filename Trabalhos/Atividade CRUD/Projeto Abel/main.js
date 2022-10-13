// Realize as seguintes operações de um CRUD de produtos (id [gerado], nome e preco) em memória (utilize array):
// - inserir: insere um produto no array, gerando um id com a ideia de autoincremento.
// - listar: retorna a lista de produtos
// - buscar por id: com base no id, retorna o produto correspondente.
// - atualizar: recebendo o id e em um produto, atualiza na lista o produto relacionado.
// - deletar: remove o produto com o id recebido no parâmetro.
// Para testar, realize chamadas de funções do próprio código.

var Id = "";
var NomeProd ='';
var PrecoProd= '' ;
let produtos = [];


const newIdObject = () => {
    var timestamp = Math.floor(new Date(1974, 6, 25).getTime() / 1000);
    var hex       = ('00000000' + timestamp.toString(16)).substr(-8); // zero padding
    return hex;

}

function AddcionarNovoProduto(nome, valor)
{
    let newProd = document.getElementById("nomeProd").value;
    let newvalorProd = document.getElementById("valorProd").value;

    NomeProd = newProd;
    PrecoProd = newvalorProd;

    produtos.push({'id':newIdObject(), 'Nome': NomeProd, 'Preco': PrecoProd })
    localStorage.setItem("PRODUTOS", JSON.stringify(produtos));
    produtos = JSON.parse(localStorage.getItem("PRODUTOS"));
    renderTable(produtos);
}

const renderTable = (prods) => {

    if(prods.length > 0)
    {
        for( i= 0; prods.length > i; i++)
        {
            const linha = `<tr><td>${prods[i]['Nome']}</td></tr>`;
            let tabela = document.getElementById('tabela');
            tabela.innerHTML += linha;
            

        }
    }

}
document.onreadystatechange = function () {
    
produtos = JSON.parse(localStorage.getItem("PRODUTOS")) || [];
    if (document.readyState === 'interactive') {
        renderTable(produtos);
    }
  }


console.log(produtos)





// preco.push(59.99)