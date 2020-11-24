class CategoriasRepoArray {
    constructor(){
        this.categorias = []
    }
    cadastrar(categoria){
        this.categorias.push(categoria);
    }
    excluir(id) {

    }
    alter(id){

    }
    buscar(categoria){

    }
    buscarTodos(){
        return this.categorias
    }
}
module.exports = CategoriasRepoArray;