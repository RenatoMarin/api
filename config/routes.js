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

    // ROTAS CATEGORIAS
    app.route('/categoria')
        .get(app.api.categoria.getCategoria)
        .post(app.api.categoria.saveCategoria)
        
    app.route('/categoria/:id')
        .delete(app.api.categoria.removeCategoria)
    
    app.get('/categoria/:catId', async (req, res)=> {
        const {catId} = req.params
        const result = await knex
            .select("*")
            .where({catId})
            .from("categoria")
        return res.json(result)
    })

    app.put('/categoria/:catId', async (req, res )=> {
        const {catId} = req.params
        await knex('categoria')
        .where({catId})
        .update(req.body)
        return res.json({message: "Update realizado", categoria: req.body})
    })
 }