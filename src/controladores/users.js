const users = require('../dados/dados')


const listarUsuarios = (req, res) => {
    
    res.status(200).send(users)
}

const obterUsuario = (req, res) => {
    const {id} = req.params

    if(Number(id) > users.length) {
        res.send("ID inválido")
    }else {
    const user = users.find( user => user.id === Number(id))
    res.status(200).send(user)
    }
}

module.exports = {
    listarUsuarios,
    obterUsuario

}