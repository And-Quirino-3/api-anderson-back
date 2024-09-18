const express = require('express')
const { usersList } = require('./controllers/user/user-list')
const { userGet } = require('./controllers/user/usr-get')
const { userCreate } = require('./controllers/user/user-create')
const { userUpdate } = require('./controllers/user/user-update')
const { userDelete } = require('./controllers/user/user-delete')

const routers = express()


routers.get('/users', usersList)
routers.get('/users/:id', userGet)
routers.post('/users', userCreate)
routers.put('/users/:id', userUpdate)
routers.delete('/users/:id', userDelete)






module.exports = routers