const express = require('express')
const app = express()
const knex = require("./db")
app.use(express.json())

module.exports = app => {

    //ROTAS PRODUTOS
    app.route('/produtos')
        .get(app.api.produtos.getProdutos)
        .post(app.api.produtos.saveProdutos)
        
    app.route('/produtos/:id')
        .delete(app.api.produtos.removeProdutos)
        .get(app.api.produtos.getProdutosById)

    app.put('/produtos/:prodId', async (req, res )=> {
        const {prodId} = req.params
        await knex('produtos')
        .where({prodId})
        .update(req.body)
        return res.json({message: "Update realizado", produto: req.body})
    })
 }