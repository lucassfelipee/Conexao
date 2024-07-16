// pedidoController.js

var pedidoModel = require("../models/pedidoModel");

function cadastrarPedido(req, res) {
    var id_cliente = req.body.id_cliente;
    var numero_pedido = req.body.numero_pedido;
    var detalhes_pedido = req.body.detalhes_pedido;

    
    if (id_cliente == undefined || numero_pedido == undefined || detalhes_pedido == undefined) {
        res.status(400).send("Parâmetros inválidos para cadastrar pedido.");
        return;
    }

    
    pedidoModel.cadastrarPedido(id_cliente, numero_pedido, detalhes_pedido)
        .then(function (resultado) {
            res.status(201).json({ mensagem: "Pedido cadastrado com sucesso!" });
        })
        .catch(function (erro) {
            console.log("Erro ao cadastrar pedido:", erro);
            res.status(500).send("Erro ao cadastrar pedido.");
        });
}

module.exports = {
    cadastrarPedido
};
