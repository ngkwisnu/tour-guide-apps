const mysql = require('mysql2')

const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tourguide_db',
})

module.exports = dbPool.promise()