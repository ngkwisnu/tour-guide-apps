const mysql = require('mysql2')

const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nusa_guide',
})

module.exports = dbPool.promise()