const { Client } = require('pg')

const conexao = {
    user: 'postgres',
    host: 'localhost',
    database: 'crud_produtos',
    password: 'S@ul1988',
    port: '5432',
}

async function listar() {
    const cliente = new Client(conexao)
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM produtos');
    await cliente.end();
    return res.rows;
}
async function inserir(produto) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('INSERT INTO produtos(nome,preco) VALUES ($1,$2) RETURNING *', 
        [produto.nome, produto.preco]);
    await cliente.end();
    return res.rows[0]
}

async function buscarPorId(id) {
    const cliente = new Client(conexao)
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM produtos WHERE id=$1',[id]);
    await cliente.end();
    return res.rows[0];
}

async function buscarPorNome(nome) {
    const cliente = new Client(conexao)
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM produtos WHERE nome=$1',[nome]);
    await cliente.end();
    return res.rows;
}

async function atualizar(id, produto) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('UPDATE produtos SET nome=$1, preco=$2 WHERE id=$3 RETURNING *', 
        [produto.nome, produto.preco, id]);
    await cliente.end();
    return res.rows[0]
}

async function deletar(id) {
    const cliente = new Client(conexao)
    await cliente.connect();
    const res = await cliente.query('DELETE FROM produtos WHERE id=$1 RETURNING *',[id]);
    await cliente.end();
    return res.rows[0];
}

async function main() {
    const produtoInserido = await inserir({nome: "produto3", preco: 20})
    console.log("Produto Inserido", produtoInserido);
    
    const listaProdutos = await listar();
    console.log("Lista de Produtos",listaProdutos);

    const produto3 = await buscarPorId(3);
    console.log("Produto 3", produto3);

    const produtoProd3 = await buscarPorNome('produto3');
    console.log("Produto nome=3", produtoProd3);

    const produtoAtualizado = await atualizar(4, { nome: 'produto4', preco: 25});
    console.log("Produto atualizado", produtoAtualizado);

    const produtoDeletado = await deletar(6);
    console.log("Produto deletado", produtoDeletado);

 
}

main();