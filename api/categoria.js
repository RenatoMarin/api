module.exports = app => {
    const getCategoria = (req, res) => {       

        app.db('categoria')
           .orderBy('nome')
           .then(categoria => res.json(categoria))
           .catch(err => res.status(400).json(err))
    }
    const getCategoriaById = (req, res) => {       
        app.db('categoria')
           .where({catId: req.params.id})
           .orderBy('nome')
           .then(categoria => res.json(categoria))
           .catch(err => res.status(400).json(err))
    }
    const saveCategoria = (req, res) => {
        app.db('categoria')
           .insert(req.body) 
           .then(_ => res.status(200).send())
           .catch(err => res.status(400).json(err))
    }
    const removeCategoria = (req, res) => {
        app.db('categoria')
           .where({catId: req.params.id}) 
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

    return { getCategoria, getCategoriaById, saveCategoria, removeCategoria}

}