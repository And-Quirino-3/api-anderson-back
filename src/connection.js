const { Pool } = require('pg')

const pool = new Pool ({
    host: 'localhost',
    database: 'anderson',
    port: 5435,
    user: 'postgres',
    password: 'postgres'
})

module.exports = pool