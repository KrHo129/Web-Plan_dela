const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'remotemysql.com',
    port: "",     
    user:'', 
    password: '',
    connectionLimit: 5,
    database: ""
});

module.exports.pool = pool;