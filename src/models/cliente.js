

var database = require("../database/config");

function cadastrarPedido(id_cliente, numero_pedido, detalhes_pedido) {
    var instrucaoSql = `
        INSERT INTO pedido (id_cliente, numero_pedido, detalhes_pedido) 
        VALUES (?, ?, ?);
    `;
    var valores = [id_cliente, numero_pedido, JSON.stringify(detalhes_pedido)];

    console.log("Executando a instrução SQL para cadastrar pedido:\n", instrucaoSql, valores);
    
    
    return database.executar(instrucaoSql, valores);
}

module.exports = {
    cadastrarPedido
};
