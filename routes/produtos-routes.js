const express = require('express')
var router = express.Router()

//Construtores
const Produtos = require("../models/produtos.js")
const ProdutosService = require("../services/produtos-service")
var produtosService = new ProdutosService()

router.get("/produtos", (req, res)=> {
    res.json(ProdutosService.buscarTodos())
})

router.post("/produtos", (req,res)=> {
    let produtos = new Produtos(req.body.prodId)
    produtosService.cadastrar(produtos)
    res.json(produtos)
})

router.put("/produtos", (req, res)=> {
    produtosService.alter(req.body)
    res.send('Editado')
})

router.delete("/produtos/:id", (req, res)=> {
    produtosService.excluir(req.prodId);
})

module.exports = router