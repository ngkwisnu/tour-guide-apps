const mysql = require('mysql2')

const dbPool = mysql.createPool({
<<<<<<< HEAD
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tourguide_db',
    port:3307,
=======
    host: 'SG-tour-guide-apps-8584-mysql-master.servers.mongodirector.com',
    user: 'sgroot',
    password: 'TssrFMTJs1Bf,Ow6',
    database: 'nusaguide',
>>>>>>> admin
})

module.exports = dbPool.promise()