    create database cantina;

    use cantina;

    -- Tabela Cliente
    CREATE TABLE cliente (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(100) NOT NULL
    );

    CREATE TABLE pedido (
        id_pedido INT AUTO_INCREMENT PRIMARY KEY,
        id_cliente INT NOT NULL,
        numero_pedido INT NOT NULL,
        detalhes_pedido TEXT
    );

    select * from pedido;
