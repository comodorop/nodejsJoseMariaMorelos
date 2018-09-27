var express = require('express')

var bodyParser = require('body-parser')
var objUser = require('./DAOUsuarios/daoUsuarios')




var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/saludar', (req, resp) => {
    resp.send({ status: 200, msg: "Hola mundo", name: "pablo" })
})

app.post('/saveUser', (req, resp) => {
    var param = req.body
    objUser.saveUser(param).then(msg => {
        resp.status(201).send({ msg: "Los datos han sido insertados" })
    }, err => {
        resp.status(300).send({msg:"Hubo un error de sintaxis"})
    })
})




app.get('/selectUsers', (req, resp)=>{
    objUser.selectUser().then(msg =>{
        resp.status(200).send({status: 200, data :msg})
    }, err =>{
        resp.status(300).send("Ocurrio un error de sintaxis")
    })
})


app.listen(3500, () => {
    console.log("SERVIDOR INICIANDO")
})



