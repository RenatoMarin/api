const ProdutosRepoArray = require("../repositories/produtos-repo-array")

class ProdutosService {
    constructor(){
        this.produtosRepository = new ProdutosRepoArray;
    }
    cadastrar(produto){
        this.produtosRepository.cadastrar(produto)
    }
    excluir(id) {
        this.produtosRepository.excluir(id)
    }
    alter(id){
        this.produtosRepository.alter(id)
    }
    buscar(produto){
        this.produtosRepository.buscar(produto)
    }   
    buscarTodos(){
        return this.produtosRepository.buscarTodos()
    }
}
module.exports = ProdutosService;