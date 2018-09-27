var connection = require('../DAOConnection/connection')



function saveUser(objUsuarios) {
    var promise = new Promise((resp, rej) => {
        var cn = connection.connection()
        var sql = `INSERT INTO usuarios (user, pass)
        VALUES ('${objUsuarios.user}','${objUsuarios.pass}')`
        cn.query(sql, (err, result, field) => {
            if (err) {
                console.log(err)
                rej(0)
            } else {
                resp(1)
            }
        })
    })
    return promise
}

function selectUser() {
    var promise = new Promise((resp, rej) => {
        var cn = connection.connection()
        var sql = `SELECT * FROM usuarios`
        cn.query(sql, (err, result, field) => {
            if (err) {
                rej(0)
                console.log("ocurrio un error")
            } else {
                resp(result)
            }
        })
    })
    return promise
}




module.exports = {
    saveUser,
    selectUser
}