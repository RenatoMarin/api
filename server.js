const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

//ROTAS
const produtosRoutes = require("./routes/produtos-routes")
const categoriasRoutes = require("./routes/categorias-routes")

//Express Json
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

//CHAMANDO ROTAS
app.use(produtosRoutes)
app.use(categoriasRoutes)

app.listen(port, function(){
    console.log(`Server running at http://localhost:${port}/`)
})