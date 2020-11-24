module.exports = app => {
    const getProdutos = (req, res) => {       

        app.db('produtos')
           .orderBy('datacadastro')
           .then(produtos => res.json(produtos))
           .catch(err => res.status(400).json(err))
    }
    const saveProdutos = (req, res) => {
        if(!req.body.nome.trim()){
            return res.status(400).send('Nome é um campo obrigatório')
        }
        app.db('produtos')
           .insert(req.body) 
           .then(_ => res.status(204).send())
           .catch(err => res.status(400).json(err))
    }
    const removeProdutos = (req, res) => {
        app.db('produtos')
           .where({id: req.params.id }) 
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
           .where({ id: req.params.id, userId: req.user.id })
           .update({ doneAt })
           .then(_ => res.status(204).send())
           .catch(err => res.status(400).json(err))
    }
    return { getProdutos, saveProdutos, removeProdutos , updateProdutos}

}