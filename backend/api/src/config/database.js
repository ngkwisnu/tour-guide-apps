const mysql = require('mysql2')

const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tourguide_db',
    port:3307,
})

module.exports = dbPool.promise()