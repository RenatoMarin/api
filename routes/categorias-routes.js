const express = require('express');
var router = express.router()


//Construtores
const Categorias = require("../models/categorias.js");
const CategoriasService = require("../services/categorias-service");
var categoriasService = new CategoriasService();

router.get("/categorias", (req, res)=> {
    res.json(categoriasService.buscarTodos())
})

router.post("/categorias", (req,res)=> {
    let categorias = new Categorias(req.body.prodId)
    categoriasService.cadastrar(categorias)
    res.json(categorias)
})

router.put("/categorias", (req, res)=> {
    categoriasService.alter(req.body)
    res.send('Editado')
})

router.delete("/categorias/:id", (req, res)=> {
    categoriasService.excluir(req.prodId);
})

module.exports = router