const express = require('express')

const app = express()

app.get('/login', (req, res) => {
    console.log("Dentro do Endpoint")
    res.status(200).send("Server Dinho")
})

app.listen(3000, () => {
    console.log("Servidor Iniciado")
})