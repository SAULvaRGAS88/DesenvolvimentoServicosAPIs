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

    await cliente.connect()

    const res = await cliente.query('SELECT * FROM produtos')
    console.log(res.rows)
    await cliente.end()

}

async function inserir(produtos) {
    const cliente = new Client(conexao)

    await cliente.connect()

    const res = await cliente.query('INSERT INTO produtos(nome, preco) VALUES ($1, $2)'),
    [produto.nome, produto.preco]
    console.log(res.rows)
    await cliente.end()

}

listar();