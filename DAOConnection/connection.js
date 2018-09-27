
var mysql = require('mysql');

function connection() {
    var conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'ascodecodigo'
    });
    return conn;
}

module.exports = {
    connection
}





// connection.connect();
// connection.query(`INSERT INTO usuarios (user, pass) VALUES('Juan', '122')`, (error, result, fields) => {
//     console.log(result)
// });
// connection.end();