module.exports = app => {

    //ROTAS PRODUTOS
    app.route('/produtos')
        .get(app.api.produtos.getProdutos)
        //.post(app.api.produtos.saveProdutos)
        
    app.route('/produtos/:id')
        .delete(app.api.produtos.removeProdutos)

 }