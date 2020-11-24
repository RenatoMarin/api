const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')
const port = process.env.PORT || 3000
//const path = require("path")


consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('/config/routes.js')
    .into(app)


//ROTAS
//const produtosRoutes = require("./routes/produtos-routes")
//const categoriasRoutes = require("./routes/categorias-routes")

//Express Json
//app.use(express.json());
//app.use(express.static(path.join(__dirname, 'public')))

//CHAMANDO ROTAS
//app.use(produtosRoutes)
//app.use(categoriasRoutes)

app.db = db

app.listen(port, function(){
    console.log(`Server running at http://localhost:${port}/`)
})