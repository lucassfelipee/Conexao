const express = require('express');
const app = express();
const pedidoRoutes = require('./routes/pedidoRoutes'); // Verifique esta linha

app.use(express.json());

// Rotas
app.use('/pedidos', pedidoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
