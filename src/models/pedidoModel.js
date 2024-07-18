const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/meu-banco-de-dados', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB');
});

// Schema do Pedido
const pedidoSchema = new mongoose.Schema({
  id_cliente: Number,
  numero_pedido: Number,
  detalhes_pedido: {
    salgados: [{
      tipo: String,
      qtd: Number,
    }],
    refrigerantes: [{
      refrigerante: String,
      qtd: Number,
    }],
    total_pedido: Number,
  },
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

// Middleware para analisar corpos de requisição JSON
app.use(express.json());

// Middleware para servir arquivos estáticos do diretório 'public'
app.use(express.static('public'));

// Rota para a raiz do site
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/pedido.html');
});

// Rota para cadastrar um novo pedido
app.post('/pedidos/cadastrar', async (req, res) => {
  try {
    const { id_cliente, numero_pedido, detalhes_pedido } = req.body;

    const novoPedido = new Pedido({
      id_cliente,
      numero_pedido,
      detalhes_pedido,
    });

    await novoPedido.save();

    res.status(201).json({ message: 'Pedido cadastrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao salvar o pedido:', error);
    res.status(500).json({ error: 'Erro ao salvar o pedido.' });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
