import express from "express";
import mysql from "mysql2";

const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_NAME 
});

connection.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao MySQL:", err);
    } else {
        console.log("Conectado ao MySQL");
    }
});

app.get("/", (req, res) => {
    res.send("API funcionando 🚀");
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
