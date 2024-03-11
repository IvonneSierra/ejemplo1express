const express = require ('express')
const app = express()
const port = 3000

app.get ('/palabra', (req, res) => {
    res.send('Hola Mundo no feliz')

})

app.listen(port, () => {
    console.log ('La aplicación se esta ejecutando en el puerto ' + port)

})