// src/config/database.js

const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10, 
    host: 'localhost',
    user: 'root',
    password: 'sptech',
    database: 'cantina'
});

function executar(sql, valores) {
    return new Promise((resolve, reject) => {
        
        pool.getConnection((err, connection) => {
            if (err) {
                console.error('Erro ao obter conexão do pool:', err);
                reject(err);
                return;
            }

            
            connection.query(sql, valores, (err, results, fields) => {
                
                connection.release();

                if (err) {
                    console.error('Erro ao executar a consulta SQL:', err);
                    reject(err);
                    return;
                }

                
                resolve(results);
            });
        });
    });
}

module.exports = {
    executar
};
