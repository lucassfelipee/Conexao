
var express = require("express");
var router = express.Router();
var pedidoController = require("../controllers/pedidoController");


router.post("/cadastrar", pedidoController.cadastrarPedido);

module.exports = router;
