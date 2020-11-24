class ProdutosRepoArray {
    constructor(){
        this.produtos = []
    }
    cadastrar(produto){
        this.produtos.push(produto);
    }
    excluir(id) {

    }
    alter(id){

    }
    buscar(produto){

    }
    buscarTodos(){
        return this.produtos
    }
}
module.exports = ProdutosRepoArray;