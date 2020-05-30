export interface IProduto{
    id : number,
    nome : string,
    preco : number,
    dataModificacao : string,
    dataCriacao : string,
    ativo : boolean,
    fornecedorId : number
}