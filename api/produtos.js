module.exports = app => {
    const getProdutos = (req, res) => {       

        app.db('produtos')
           .orderBy('nome')
           .then(produtos => res.json(produtos))
           .catch(err => res.status(400).json(err))
    }
    const getProdutosById = (req, res) => {       
        app.db('produtos')
           .where({prodId: req.params.id})
           .orderBy('nome')
           .then(produtos => res.json(produtos))
           .catch(err => res.status(400).json(err))
    }
    const saveProdutos = (req, res) => {
        app.db('produtos')
           .insert(req.body) 
           .then(_ => res.status(200).send())
           .catch(err => res.status(400).json(err))
    }
    const removeProdutos = (req, res) => {
        app.db('produtos')
           .where({prodId: req.params.id}) 
           .del()
           .then(rowsDeleted => {
            if(rowsDeleted > 0) {
                res.status(204).send()
            } else {
                const msg = `Não foi encontrada produto com id ${req.params.id}.`
                res.status(400).send(msg)
            }
           })
           .catch(err => res.status(400).json(err))
    }
    const updateProdutos = (req, res, doneAt) => {
        app.db('produtos')
           .where({ id: req.params.id, prodId: req.params.id })
           .update({ doneAt })
           .then(_ => res.status(204).send())
           .catch(err => res.status(400).json(err))
    }
    return { getProdutos, getProdutosById, saveProdutos, removeProdutos , updateProdutos}

}