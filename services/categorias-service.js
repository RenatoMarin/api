const CategoriasRepoArray = require("../repositories/categorias-repo-array")

class CategoriasService {
    constructor(){
        this.categoriasRepository = new CategoriasRepoArray;
    }
    cadastrar(categoria){
        this.categoriasRepository.cadastrar(categoria)
    }
    excluir(id) {
        this.categoriasRepository.excluir(id)
    }
    alter(id){
        this.categoriasRepository.alter(id)
    }
    buscar(categoria){
        this.categoriasRepository.buscar(categoria)
    }
    buscarTodos(){
        return this.categoriasRepository.buscarTodos()
    }
}
module.exports = CategoriasService;