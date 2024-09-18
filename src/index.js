const express = require('express')
const users = require('./dados/dados')

const app = express()

app.get('/users', (req, res) => {
    
    res.status(200).send(users)
})

app.get('/users/:id', (req, res) => {
    const {id} = req.params

    const user = users.find( user => user.id === Number(id))
    
    res.status(200).send(user)
})

app.listen(3000, () => {
    console.log("Servidor Iniciado")
})